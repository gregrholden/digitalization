const gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

// Preview 'docs' folder
gulp.task('previewDocs', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'docs'
    }
  });
});

// Delete existing docs folder for refresh
gulp.task('deleteDocs', function() {
  return del('./docs');
});

gulp.task('copyFiles', ['deleteDocs'], function() {
  var pathsToCopy = [
    './app/**/*',
    '!./app/*.html',
    '!./app/assets/**',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/src',
    '!./app/src/**'
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImages', ['deleteDocs'], function() {
  return gulp.src(['./app/assets/images/**/*'])
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDocs'], function() {
  gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'], function() {
  return gulp.src('./app/*.html')
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}],
      js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDocs', 'copyFiles', 'optimizeImages', 'useminTrigger']);
