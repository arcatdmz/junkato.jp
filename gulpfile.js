const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-csso');
const ts = require('gulp-typescript');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const browserSync = require('browser-sync');

const tsProject = ts.createProject('tsconfig.json');
const webpackConfig = require('./webpack.config');

gulp.task('ts', function(){
  return gulp.src('src/**/*.ts')
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(tsProject())
    .pipe(gulp.dest('src'))
});

gulp.task('js', ['ts'], function(){
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function(){
  return gulp.src(['src/**/*.pug', '!src/**/_*.pug'])
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(pug())
    .pipe(gulp.dest('dist/'))
});

gulp.task('css', function(){
  return gulp.src('src/stylesheets/**/*.less')
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/stylesheets'))
});

gulp.task('copy', function(){
  return gulp.src('src/**/*.{pdf,png,jpg}', { base: 'src'})
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(gulp.dest('dist'));
})

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: 'dist/'
    }
  });
  gulp.watch('dist/**/*.{html,pdf,png,jpg}', ['reload']);
  gulp.watch('dist/javascripts/**/*.js', ['reload']);
  gulp.watch('dist/stylesheets/**/*.css', ['reload']);
});

gulp.task('reload', () => {
  browserSync.reload();
});

gulp.task('watch', function(){
  gulp.watch(['src/**/*.pug', '!src/**/_*.pug'], ['html']);
  gulp.watch('src/stylesheets/**/*.less', ['css']);
  gulp.watch('src/**/*.ts', ['js']);
  gulp.watch('src/**/*.{pdf,png,jpg}', ['copy']);
});

gulp.task('default', ['html', 'css', 'js', 'copy']);
gulp.task('sync', ['default', 'browser-sync', 'watch']);
