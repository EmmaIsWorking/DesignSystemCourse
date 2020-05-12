var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var version = require('./package.json');

//npm install gulp --save --only=dev
gulp.task('hello', async () => {
  console.log('Hello ');
});
//npm install gulp-sass

gulp.task('sass', async () => {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('public/stylesheets'));
});

//npm install gulp-concat

gulp.task('style', async () => {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(concat('style_main.css'))
    .pipe(gulp.dest('public/stylesheets'))
});


// //npm install gulp-minify-css

// gulp.task('style_min', async () => {
//   return gulp
//     .src('scss/**/*.scss')
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass
//     .pipe(minifyCSS())
//     .pipe(concat('style_main_' + version.version + '.min.css'))
//     .pipe(gulp.dest('public/stylesheets'))
// });

//gulp watch

gulp.task('watch', ['style_min'], function () {
  gulp.watch('scss/**/*.scss', ['style_min']);

});