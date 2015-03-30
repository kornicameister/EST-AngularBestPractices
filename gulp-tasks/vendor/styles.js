module.exports = function (gulp, plugins, options, configuration) {
    var mainBowerFiles = require('main-bower-files'),
        path = require('path');

    return function () {
        var paths = configuration.paths,
            production = options.env === configuration.modes.PRODUCTION;

        return gulp
            .src(mainBowerFiles({
                base: paths.clientLib,
                filter: /.*\.css$/i,
                checkExistence: true,
                debugging: !production
            }))
            .pipe(plugins.if(
                production,
                plugins.sourcemaps.init()
            ))
            .pipe(plugins.concat(configuration.build.CSS_LIB))
            .pipe(gulp.dest(paths.build + '/css'))
            .pipe(plugins.if(
                production,
                plugins.minifyCss()
            ))
            .pipe(plugins.if(
                production,
                plugins.rename({
                    suffix: '.min'
                })
            ))
            .pipe(plugins.if(
                production,
                plugins.sourcemaps.write('../maps', {
                    addComment: true
                })
            ))
            .pipe(plugins.if(
                production,
                gulp.dest(paths.build + '/css')
            ))
            .pipe(plugins.notify('vendor/styles task completed'));
    }
};