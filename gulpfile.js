var gulp   = require('gulp');
var watch  = require('gulp-watch');
var babel  = require('gulp-babel');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var browserify = require('browserify');
var reactify   = require('reactify');
var source = require('vinyl-source-stream');
var autoprefixer = require('autoprefixer-stylus');
var connect = require('gulp-connect');

gulp.task('browserify', function () {
    browserify('src/app.js')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('styles', function() {
    return gulp.src('src/**/*.styl')
        .pipe(stylus({
            use: [autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            })]
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        port: 8000,
        //root: '/',
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.styl', ['styles']);
    gulp.watch('src/**/*.js',   ['browserify']);
});

gulp.task('default', ['styles', 'browserify', 'connect', 'watch']);