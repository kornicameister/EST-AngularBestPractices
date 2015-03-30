module.exports = function (gulp, plugins, options, configuration) {

    var buildPath = configuration.paths.build,
        production = options.env === configuration.modes.PRODUCTION,
        injection = plugins.merge(
            gulp.src(buildPath + '/js/' + configuration.build.JS_LIB),
            gulp.src(buildPath + '/js/' + getFileName(configuration.build.JS)),
            gulp.src(buildPath + '/js/' + getFileName(configuration.build.JS_VIEW)),
            gulp.src(buildPath + '/css/' + getFileName(configuration.build.CSS_LIB)),
            gulp.src(buildPath + '/css/' + configuration.build.CSS)
        );

    return function () {
        return gulp
            .src(configuration.paths.client + '/index.html')
            .pipe(plugins.inject(injection, {
                addRootSlash: false,
                relative: false,
                ignorePath: 'build'
            }))
            .pipe(plugins.if(
                production,
                plugins.minifyHtml()
            ))
            .pipe(gulp.dest(configuration.paths.build))
            .pipe(plugins.notify('index task completed'));
    };

    function getFileName(fileName) {
        if (production && !/.*min.*/gi.test(fileName)) {
            fileName = fileName.replace('.js', '.min.js');
        }
        return fileName;
    }

};