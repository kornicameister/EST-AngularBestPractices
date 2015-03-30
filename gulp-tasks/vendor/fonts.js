module.exports = function (gulp, plugins, options, configuration) {
    var mainBowerFiles = require('main-bower-files'),
        path = require('path');

    return function () {
        var paths = configuration.paths,
            production = options.env === configuration.modes.PRODUCTION;
        return gulp
            .src(mainBowerFiles({
                base: paths.clientLib,
                filter: /.*\.(eot|svg|ttf|woff|woff2)$/i,
                checkExistence: true,
                debugging: !production
            }))
            .pipe(gulp.dest(paths.build + '/fonts'))
            .pipe(plugins.notify('vendor/fonts task completed'));
    }
};