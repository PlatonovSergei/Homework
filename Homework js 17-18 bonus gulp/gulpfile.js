'use strict';

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

var path = {
    dist: {
        js: 'dist/js/',
        style: 'dist/css/'
    },
    src: {
        js: 'src/js/*.js',
        style: 'src/css/*.css'
    },
    watch: {
        js: 'src/js/**/*.js',
        style: 'src/css/**/*.css'
    }
};

gulp.task('scripts', function () {
    gulp.src(path.src.js)
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.dist.js))

});

gulp.task('styles', function () {
    gulp.src(path.src.style)
        .pipe(concatCss('style.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(path.dist.style))

});

gulp.task('watch', function () {

    watch([path.watch.style], function (event, cb) {
        gulp.start('styles');
    });
    watch([path.watch.js], function (event, cb) {
        gulp.start('scripts');
    });
});

gulp.task('build', [
    'scripts',
    'styles'
]);



gulp.task('default', ['build', 'watch']);
