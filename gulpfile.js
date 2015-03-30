(function () {

    // ref: https://github.com/kornicameister/SpringAtom/blob/97f0914810f935f3f7b59561946dc0b7288825a6/gulpfile.js

    var gulp = require('gulp'),
        configuration = require('./configuration/environment'),
        plugins = require('gulp-load-plugins')(),
        minimist = require('minimist'),
        knownOptions = {
            string: 'env',
            default: {
                env: process.env.NODE_ENV || configuration.modes.DEVELOPMENT
            }
        },
        options = minimist(process.argv.slice(2), knownOptions);

    // tasks
    gulp.task('default', ['clean', 'build']);

    gulp.task('build', ['vendor', 'scripts', 'styles', 'views', 'index']);
    gulp.task('clean', getTask('clean'));

    gulp.task('scripts', getTask('scripts'));
    gulp.task('views', getTask('views'));
    gulp.task('index', getTask('index'));
    gulp.task('styles', getTask('styles'));

    gulp.task('vendor.scripts', getTask('vendor/scripts'));
    gulp.task('vendor.font', getTask('vendor/fonts'));
    gulp.task('vendor.styles', getTask('vendor/styles'));
    gulp.task('vendor', ['vendor.scripts', 'vendor.font', 'vendor.styles']);

    gulp.task('browser-sync', getTask('browser-sync'));
    gulp.task('watch', ['browser-sync'], getTask('watch'));
    // tasks

    function getTask(task) {
        return require('./gulp-tasks/' + task)(gulp, plugins, options, configuration);
    }

}());
