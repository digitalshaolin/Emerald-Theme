const gulp = require('gulp');
const themeKit = require('@shopify/themekit');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean-css');

gulp.task('sass', function () {
    return gulp.src('styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets'))
});

gulp.task('watch', function () {
    gulp.watch('styles/**/*.scss', gulp.series('sass'))
    themeKit.command('watch', {       
        env: 'development',
        allowLive: true
    })
});