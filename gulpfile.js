const gulp = require('gulp');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const cssnano = require('gulp-cssnano');

gulp.task('minify-js', function () {
    return gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-html', function () {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function () {
    return gulp.src('src/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('minify-js', 'minify-html', 'minify-css'));
