const gulp = require('gulp');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject(ts.reporter.fullReporter()));
  return tsResult.js.pipe(gulp.dest('api/dist'));
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('api/src/**/*.ts', ['scripts']);
});

gulp.task('serve', function () {
    setTimeout(() => {
        nodemon({
            script: './api/dist/index.js',
            ignore: ['client/','node_modules/', 'typings/']
        })
        .on('restart', function () {
            console.log('restarted!');
        });
    }, 2000)

});


gulp.task('default', ['watch', 'serve']);
