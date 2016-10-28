/// <binding AfterBuild='default' Clean='clean' />

var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
    input: ['src/app/**/*.ts'],
    output: {
        root: 'built',
        js: 'built/www',
        dts: 'built/dts'
    }
};

gulp.task('clean', function () {
    return del([paths.output.root]);
});

gulp.task('compile', function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src(paths.input).pipe(sourcemaps.init()).pipe(tsProject());
    return merge([
        tsResult.js.pipe(sourcemaps.write()).pipe(gulp.dest(paths.output.js)),
        tsResult.dts.pipe(gulp.dest(paths.output.dts))
    ]);
});

gulp.task('recompile', ['clean'], function(){
    gulp.start('compile');
});

gulp.task('default', ['recompile'], function(){});

gulp.task('watch', [], function() {
    gulp.watch(paths.input, ['default']);
});