import gulp from 'gulp';
import config from '../config';

gulp.task('watch', () => {
  gulp.watch(config.watch.js, config.watch.options);
  gulp.watch(config.watch.html, config.watch.options);
});
