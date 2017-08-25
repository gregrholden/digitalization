const gulp = require('gulp'),
sass = require('gulp-sass');

gulp.task('styles', function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', './app/src/styles/**/*.scss'])
    .pipe(sass())
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/assets/styles'));
});
