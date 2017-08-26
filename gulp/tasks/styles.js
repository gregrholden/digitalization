const gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
hexrgba = require('postcss-hexrgba'),
cssNext = require('postcss-cssnext');

gulp.task('styles', function() {
  return gulp.src('./app/src/styles/styles.css')
    .pipe(postcss([cssImport, cssVars, nested, hexrgba, cssNext]))
    .on('error', function(err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/assets/styles'));
});
