var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var config = {
  attention: {
    bounce: true,
    hang: true,
    hover: true,
    shake: true
  },
  bounce: {
    bounceInDown: true,
    bounceInLeft: true,
    bounceInRight: true,
    bounceInUp: true,
    bounceOutDown: true,
    bounceOutLeft: true,
    bounceOutRight: true,
    bounceOutUp: true
  },
  fade: {
    fadeIn: true,
    fadeInDown: true,
    fadeInLeft: true,
    fadeInRight: true,
    fadeInUp: true,
    fadeOut: true,
    fadeOutDown: true,
    fadeOutLeft: true,
    fadeOutRight: true,
    fadeOutUp: true
  },
  slide: {
    slideInDown: true,
    slideInLeft: true,
    slideInRight: true,
    slideInUp: true,
    slideOutDown: true,
    slideOutLeft: true,
    slideOutRight: true,
    slideOutUp: true
  },
  misc: {
    fallIn: true,
    fallOut: true,
    flipInHorizontal: true,
    flipOutHorizontal: true,
    flipInVertical: true,
    flipOutVertical: true,
    popIn: true,
    popOut: true,
    scaleIn: true,
    scaleOut: true
  }
}

var cssSrc = ['./src/scss/alive.scss'];

for (var cat in config) {
  for (var file in config[cat]) {
    if (config[cat][file]) {
      cssSrc.push('./src/scss/modules/' + cat + '/' + file + '.scss');
    }
  }
}

gulp.task('sass', function () {
  return gulp.src(cssSrc)
    .pipe(concat('concat.scss'))
    .pipe(gulp.dest('./src/scss'))
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: './src/scss/concat.scss',
    }))
    .pipe(prefix('last 3 version', 'ie 9', 'bb 10', 'android 3'))
    .pipe(rename('alive.min.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
  gulp.watch(cssSrc, ['sass']);
})

gulp.task('default', ['sass']);
gulp.task('dev', ['sass', 'watch']);