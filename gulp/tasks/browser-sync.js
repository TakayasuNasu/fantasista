import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from '../config';

gulp.task('browser-sync', () => {
  browserSync({
    proxy: {
      target: config.browserSync.target
    },
    port: config.browserSync.port
  });
});
