// full encapsulation
(function() {
  angular
    .module('todo.common.log')
    // append decorator to the angular queue
    .config(['$provide', logDecorator]);

  /**
   * Decorator function
   *
   * @param provide a <b>$provide</b> instance to decorate $log
   */
  function logDecorator($provide) {
    $provide.decorator('$log', ["$delegate", function($delegate) {
      enhanceLoggerFn($delegate, '::');
      return $delegate;
    }]);
  }

  function enhanceLoggerFn($log, separator) {
    // copy actual function's pointers, will be used later
    var _$log = (function($log) {
        return {
          log: $log.log,
          info: $log.info,
          warn: $log.warn,
          debug: $log.debug,
          error: $log.error
        };
      }($log)),
        supplant = _.template('${ts} - ${cn}${msg}');

    // lets add new function here, that will inject customized $log behaviour
    $log.getInstance = getInstance;

    return $log;

    /**
     * Allows to put on some candy if working with Chrome Browser for instance
     * @param message message to put some color on
     * @param colorCSS which color to use
     */
    function colorify(message, colorCSS) {
      var isChrome = bowser.chrome || bowser.phantomjs,
        canColorize = isChrome && (colorCSS !== undefined);

      return canColorize ? ["%c" + message, colorCSS] : [message];
    }

    /**
     * Creater wrapper around actual <b>logFn</b> (one of copied from original $log).
     */
    function prepareLogFn(logFn, className, colorCSS) {
      /**
       * Invoke the specified `logFn` with the supplant functionality...
       */
      var enhancedLogFn = function() {
        try {
          var args = Array.prototype.slice.call(arguments),
            now = moment().format('DD.MM.YYYY@HH:mm:ss');

          // prepend a timestamp and optional classname to the original output message
          args[0] = supplant({
            ts: now,
            cn: className,
            msg: args[0]
          });
          args = colorify(args[0], colorCSS);

          logFn.apply(null, args);
        } catch (error) {
          $log.error("LogEnhancer ERROR: " + error);
        }

      };

      // Only needed to support angular-mocks expectations
      enhancedLogFn.logs = [];

      return enhancedLogFn;
    }

    /**
     * Creates boosted up instance of $log
     *
     * @param className logger name
     * @param colorCSS to we want custom color for it
     * @param customSeparator what separator should be used
     */
    function getInstance(className, colorCSS, customSeparator) {
      className = (className !== undefined) ? className + (customSeparator || separator) : "";

      var instance = {
        log: prepareLogFn(_$log.log, className, colorCSS),
        info: prepareLogFn(_$log.info, className, colorCSS),
        warn: prepareLogFn(_$log.warn, className, colorCSS),
        debug: prepareLogFn(_$log.debug, className, colorCSS),
        error: prepareLogFn(_$log.error, className)
      };

      _.forEachRight(instance, function(fn, key) {
        instance[key] = _.wrap(fn, function(func) {
          var args = _.toArray(arguments).slice(1);
          func(args);
          return instance;
        })
      });

      if (angular.isDefined(angular.makeTryCatch)) {
        // Attach instance specific tryCatch() functionality...
        instance.tryCatch = angular.makeTryCatch(instance.error, instance);
      }

      return instance;
    }
  }
}());
