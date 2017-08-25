const gulp = require('gulp'),
webpack = require('webpack'),
webpackConfig = require('../../webpack.config.js');

gulp.task('scripts', function(callback) {
  webpack(webpackConfig, function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});
