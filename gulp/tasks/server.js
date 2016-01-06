import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import config from '../config';

gulp.task('server', () => {
  nodemon({
    script: config.server.script,
    exec:   config.server.exec,
    ignore: config.server.ignore
  });
});
