var tasks = ['css', 'minify-html', 'react'],
    postcss = require('gulp-postcss'),
    gulp = require('gulp'),
    autoprefixer = require('autoprefixer-core'),
    mqpacker = require('css-mqpacker'),
    csswring = require('csswring'),
    minifyHTML = require('gulp-minify-html'),
    react = require('gulp-react'),
    SRC_DIR = './src/',
    OUTPUT_DIR = './output',
    PATH_CSS = SRC_DIR + '*.css',
    PATH_HTML = SRC_DIR + '*.html',
    PATH_JSX = SRC_DIR + '*.jsx';

if (process.env.YENV != 'production') tasks = tasks.concat(['watch']);

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

gulp.task('react', function () {
    gulp.src(PATH_JSX)
        .pipe(react())
        .pipe(gulp.dest(OUTPUT_DIR))
});

gulp.task('watch', function() {
    gulp.watch(PATH_JSX, ['react']);
    gulp.watch(PATH_CSS, ['css']);
    gulp.watch(PATH_HTML, ['minify-html']);
});

gulp.task('default', tasks);