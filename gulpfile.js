const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function style() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .on('error', sass.logError)
        .pipe(gulp.dest('./dist/styles/'));
}
function images(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel (style, images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', {
        ignoreInitial: false
    }, gulp.parallel(style, images));
}
