module.exports = function (gulp, plugins, options, configuration) {
    var path = require('path'),
        LessPluginCleanCSS = require('less-plugin-clean-css'),
        LessPluginAutoPrefix = require('less-plugin-autoprefix'),
        cleancss = new LessPluginCleanCSS({advanced: true}),
        autoprefix = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

    return function () {
        return gulp
            .src(configuration.paths.client + '/**/*.less')
            .pipe(plugins.less({
                paths: [
                    path.join(__dirname, 'less', 'includes')
                ],
                plugins: [autoprefix, cleancss]
            }))
            .pipe(plugins.concat(configuration.build.CSS))
            .pipe(gulp.dest(configuration.paths.build + '/css'));
    }

};
