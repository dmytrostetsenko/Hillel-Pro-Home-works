const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css')
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

function concatJS () {
    return gulp.src(['./scripts/constants/*.js', './scripts/services/*.js', './scripts/utils/*.js', './scripts/components/*.js', './scripts/*.js'])
            .pipe(concat('main.js'))
            .pipe(minify())
            .pipe(gulp.dest('./dist'))
            .pipe(browserSync.stream())
}

function watchJS () {
    gulp.watch('./scripts/**/*.js', concatJS)
}

function buildStyles () {
    return gulp.src(['./styles/normalize.css', './styles/scss/style.scss'])
            .pipe(sass())
            .pipe(concat('main.css'))
            .pipe(cleanCSS())
            .pipe(gulp.dest('./dist'))
            .pipe(browserSync.stream())
}

function watchStyles (){
    gulp.watch('./styles/**/*.scss', buildStyles)
}
function watcHTML () {
    gulp.watch('./pages/index.html', moveHTML)
}
function moveHTML () {
    return gulp.src('./pages/*html')
            .pipe(gulp.dest('./dist'))
            .pipe(browserSync.stream())
}

function watchBrowser () {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    watchStyles();
    watcHTML();
    watchJS();
};

function startProject () {
    moveHTML();
    buildStyles();
    concatJS();
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
};

exports.serveProject = gulp.series(concatJS, moveHTML, buildStyles, watchBrowser)
exports.startProject = startProject;


