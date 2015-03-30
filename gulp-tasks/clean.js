module.exports = function (gulp, plugins, options, configuration) {

    var distDir = configuration.paths.build;

    return function () {
        return gulp.src(distDir, {read: false})
            .pipe(plugins.clean({force: true}))
            .pipe(plugins.notify('clean task completed'));
    }

};