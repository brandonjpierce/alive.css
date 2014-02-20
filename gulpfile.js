var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('./src/scss/alive.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(prefix("last 2 version", "ie 9"))
    .pipe(rename('alive.min.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/scss/*.scss', './src/scss/**/*.scss'], ['sass']);
})

gulp.task('default', ['sass', 'watch']);