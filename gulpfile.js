`use strict`;

const gulp = require(`gulp`);
const changed = require(`gulp-changed`);
const rename = require(`gulp-rename`);
const sass = require(`gulp-sass`)(require(`node-sass`));
const scssLint = require(`gulp-scss-lint`);

/**
 * Asset paths.
 */
const srcSCSS = `dev/scss/**/*.scss`;
const srcJS = `dev/js/*.js`;
const assetsDir = `./assets/`;

/**
 * Scss lint
 */
gulp.task(`scss-lint`, () => {
    return gulp.src(srcSCSS)
        .pipe(scssLint());
});

/**
 * SCSS task
 */
gulp.task(`scss`, gulp.series(`scss-lint`, () => {
    return gulp.src(`dev/scss/*.scss`)
        .pipe(sass().on(`error`, sass.logError))
        .pipe(rename((path) => {
            path.basename = path.basename.replace(`.scss`, `.css`)
            //path.extname = `.liquid`;
        }))
        .pipe(gulp.dest(assetsDir));
}));

/**
 * JS task
 *
 * Note: use npm to install libraries and add them below, like the babel-polyfill example
 */

gulp.task(`js`, () => {
    return gulp.src(`dev/js/*.js`)
        .pipe(rename((path) => {
            path.basename = path.basename
            //path.extname = `.liquid`;
        }))
        .pipe(gulp.dest(assetsDir));
});

/**
 * Images task
 */
gulp.task(`images`, () => {
    return gulp.src(`dev/images/**`)
        .pipe(changed(assetsDir)) // ignore unchanged files
        .pipe(gulp.dest(assetsDir))
});

/**
 * Fonts task
 */
gulp.task(`fonts`, () => {
    return gulp.src(`dev/fonts/**`)
        .pipe(changed(assetsDir)) // ignore unchanged files
        .pipe(gulp.dest(assetsDir))
});

/**
 * Watch task
 */
gulp.task(`watch`, () => {
    gulp.watch(srcSCSS, gulp.series(`scss`));
    gulp.watch(srcJS, gulp.series(`js`));
    gulp.watch(`images/*.{jpg,jpeg,png,gif,svg}`, gulp.series(`images`));
    gulp.watch(`fonts/*.{eot,svg,ttf,woff,woff2}`, gulp.series(`fonts`));
});

/**
 * Default task
 */
gulp.task(`default`, gulp.series(`scss`, `js`, `images`, `fonts`));
