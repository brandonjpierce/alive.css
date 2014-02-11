var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  gulp.src('./scss/alive.scss')
    .pipe(sass({
      includePaths: ['./scss/'],
      outputStyle: 'compressed'
    }))
    .pipe(prefix("last 2 version", "ie 9"))
    .pipe(rename('alive.min.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', function () {
  gulp.run('sass');

  gulp.watch(['./scss/*.scss', './scss/**/*.scss'], function () {
    gulp.run('sass');
  });
});