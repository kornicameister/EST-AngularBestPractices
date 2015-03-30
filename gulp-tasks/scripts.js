module.exports = function (gulp, plugins, options, configuration) {
    return function appSrc() {
        var paths = configuration.paths,
            env = configuration.modes,
            distDir = paths.build,
            jsSrcDir = paths.client,
            production = options.env === env.PRODUCTION;

        return gulp.src(jsSrcDir + '/**/*.js')
            .pipe(plugins.ngAnnotate())
            .pipe(plugins.angularFilesort())
            .pipe(plugins.if(
                production,
                plugins.sourcemaps.init()
            ))
            .pipe(plugins.concat(configuration.build.JS))
            .pipe(gulp.dest(distDir + '/js'))
            .pipe(plugins.if(
                production,
                plugins.stripDebug()
            ))
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
            .pipe(plugins.notify('scripts task completed'));
    }

};
