var gulp = require('gulp'),
notify = require('gulp-notify'),
pug = require('gulp-pug');

gulp.task('pug', function() {
  return gulp.src('./app/src/pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .on('error', notify.onError(function(err) {
      return {
        title: 'Pug',
        message: err.message
      }
    }))
    .pipe(gulp.dest('./app'))
});
