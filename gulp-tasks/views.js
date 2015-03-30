module.exports = function (gulp, plugins, options, environment) {
    return function () {

        var paths = environment.paths,
            production = options.env === environment.modes.PRODUCTION,
            distDir = paths.build;

        return gulp.src(paths.client + '/**/*.tpl.html')
            .pipe(plugins.minifyHtml({
                empty: true,
                spare: true,
                quotes: true
            }))
            .pipe(plugins.ngHtml2js({
                moduleName: 'todo',
                declareModule: false
            }))
            .pipe(plugins.concat(environment.build.JS_VIEW))
            .pipe(plugins.if(
                production,
                plugins.sourcemaps.init()
            ))
            .pipe(gulp.dest(distDir + '/js'))
            .pipe(plugins.if(
                production,
                plugins.uglify({
                    mangle: true,
                    preserveComments: 'some'
                })
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
                gulp.dest(distDir + '/js')
            ))
            .pipe(plugins.notify('views task completed'))
    }
};
