const gulp = require('gulp');
const ts = require('gulp-typescript');

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

gulp.task('default', ['watch']);
