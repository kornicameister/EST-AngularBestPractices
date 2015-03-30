module.exports = function (gulp, plugins, options, configuration) {
    return function () {
        return require('browser-sync')({
            server: {
                baseDir: configuration.paths.build,
                logLevel: 'debug',
                logConnections: true,
                logFileChanges: true
            }
        });
    }
};
