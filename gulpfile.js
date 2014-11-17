var tasks = ['css', 'minify-html', 'watch'],
    postcss = require('gulp-postcss'),
    gulp = require('gulp'),
    autoprefixer = require('autoprefixer-core'),
    mqpacker = require('css-mqpacker'),
    csswring = require('csswring'),
    minifyHTML = require('gulp-minify-html'),
    SRC_DIR = './src/',
    OUTPUT_DIR = './output',
    PATH_CSS = SRC_DIR + '*.css',
    PATH_HTML = SRC_DIR + '*.html';

process.env.YENV === 'production' && tasks.pop();

gulp.task('minify-html', function() {
    var opts = { conditionals: true };

  return gulp.src(SRC_DIR + '*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(OUTPUT_DIR))
});

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker,
        csswring
    ];
    return gulp.src(SRC_DIR + '*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest(OUTPUT_DIR));
});

gulp.task('watch', function() {
    gulp.watch(PATH_CSS, ['css']);
    gulp.watch(PATH_HTML, ['minify-html']);
});

gulp.task('default', tasks);