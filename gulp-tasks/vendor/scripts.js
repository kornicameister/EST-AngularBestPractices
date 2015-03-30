module.exports = function (gulp, plugins, options, configuration) {
    var mainBowerFiles = require('main-bower-files'),
        path = require('path');

    return function () {
        var paths = configuration.paths,
            production = options.env === configuration.modes.PRODUCTION
        return gulp
            .src(mainBowerFiles({
                base: paths.clientLib,
                filter: /.*\.js$/i,
                checkExistence: true,
                debugging: !production
            }))
            .pipe(plugins.concat(configuration.build.JS_LIB))
            .pipe(gulp.dest(paths.build + '/js'))
            .pipe(plugins.notify('vendor/scripts task completed'));
    }
};