angular.module('todo.common.log').service('loggerFactory', ['$log', function ($log) {

    var loggerCache = {},
        logger = $log.getInstance('sg.common.log.logger');

    return function (name) {

        if (loggerCache[name]) {
            logger.debug(_.format('Logger {name} loaded from cache...', {name: name}));
            return loggerCache[name];
        }

        var instance = $log.getInstance(name);

        loggerCache[name] = instance;

        return instance
    }
}]);
