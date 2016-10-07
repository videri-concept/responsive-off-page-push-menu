var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var pump = require('pump');
var uglify = require('gulp-uglify');

// Server
gulp.task('serve', ['sass', 'js'], function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch("./assets/styles/**/*.scss", ['sass']);
  gulp.watch("./assets/js/*.js", ['js-watch']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

// SASS
gulp.task('sass', function() {
  return gulp.src("assets/styles/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest("./dist/styles"))
    .pipe(browserSync.stream());
});

// JS
gulp.task('js', function (cb) {
  // more info: https://github.com/terinjokes/gulp-uglify/tree/master/docs/why-use-pump
  pump([
    gulp.src([
      // Add javascript files here...
      // './assets/javascript/bootstrap.js',
      './assets/js/application.js'
    ]),
    sourcemaps.init(),
    concat('global.js'),
    uglify(),
    sourcemaps.write('./maps'),
    gulp.dest('./dist/js')
  ],
  cb
  );
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
  browserSync.reload();
  done();
});


gulp.task('default', ['serve']);
