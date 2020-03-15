const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const dotenv = require('dotenv');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');


function css() {
  return gulp.src('./src/css/style.scss').
      pipe(plumber()).
      pipe(sourcemaps.init()).
      pipe(sass()).
      pipe(rename('main.css')).
      pipe(sourcemaps.write()).
      pipe(gulp.dest('web/assets/css/')).
      pipe(browsersync.stream());
}

function js() {
  return gulp.src('./src/js/*.js').
      pipe(plumber()).
      pipe(sourcemaps.init()).
      pipe(concat('main.js')).
      pipe(sourcemaps.write()).
      pipe(gulp.dest('web/assets/js')).
      pipe(browsersync.stream());
}

function ProductionCSS() {
  return gulp.src('./src/css/style.scss').
      pipe(plumber()).
      pipe(sass()).
      pipe(rename('main.min.css')).
      pipe(autoprefixer()).
      pipe(cleanCSS()).
      pipe(gulp.dest('web/assets/css/'));
}

function ProductionJS() {
  return gulp.src('./src/js/*.js').
      pipe(plumber()).
      pipe(concat('main.min.js')).
      pipe(terser()).
      pipe(gulp.dest('web/assets/js'));
}

function watchFiles() {
  gulp.watch('src/css/**/*.scss', css);
  gulp.watch('web/index.html', browsersync.reload());
  gulp.watch('src/js/*.js', js);
}

function browserSync(done) {
  browsersync.init({
    proxy: {
      target: 'app:80',
      proxyOptions: {
        changeOrigin: false,
      },
    },
    port: 4010,
    open: false,
  });
  done();
}

const build = gulp.parallel(css, js);
const buildProd = gulp.parallel(css, js, ProductionCSS, ProductionJS);
const watch = gulp.parallel(css, js, watchFiles, browserSync);

exports.prod = buildProd;
exports.build = build;
exports.watch = watch;

exports.default = build;

