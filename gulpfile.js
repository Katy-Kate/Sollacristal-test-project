var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('jade', function () {
    var YOUR_LOCALS = {};
    gulp.src('app/templates/index.jade')
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
    return gulp.src('app/styles/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));watch

});

gulp.task('compress', function() {
    return gulp.src('app/scripts/*.js')
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('stylus', function () {
    var YOUR_LOCALS = {};
    return gulp.src('./app/styles/style.styl')
        .pipe(stylus({
            locals: YOUR_LOCALS,
            pretty: true
        }))
        .pipe(gulp.dest('./dist/styles'));
});

gulp.task('css', ['stylus' , 'minify-css']);

gulp.task('watch', function () {
    gulp.watch('app/templates/**/*.jade', ['jade']);
    gulp.watch('app/styles/**/*.styl', ['stylus']);
    gulp.watch('app/styles/**/*.css', ['minify-css']);
    gulp.watch('app/scripts/**/*.js', ['compress']);
    // Other watchers
});



gulp.task('default', ['jade' , 'stylus']);