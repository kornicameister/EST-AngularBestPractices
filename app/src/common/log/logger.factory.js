angular.module('todo.common.log').service('loggerFactory', ['$log', function ($log) {

    var loggerCache = {};

    return function (name) {

        if (loggerCache[name]) {
            return loggerCache[name];
        }

        var instance = $log.getInstance(name);

        loggerCache[name] = instance;

        return instance
    }
}]);
