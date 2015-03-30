module.exports = function(gulp, plugins, options, configuration) {
  return function() {
    var paths = configuration.paths,
        browserSync = require('browser-sync');

    gulp.watch(paths.client + '/**/*.js', ['scripts', browserSync.reload]);
    gulp.watch(paths.client + '/**/*.tpl.html', ['views', browserSync.reload]);
    gulp.watch(paths.client + '/**/*.less', ['styles', browserSync.reload]);
    gulp.watch(paths.client + '/index.html', ['index', browserSync.reload]);
    return gulp.watch(paths.clientLib, ['vendor', browserSync.reload]);
  }
};
