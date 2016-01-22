import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import config from '../config';

function errorHandler(err) {
  console.log('Error: ' + err.message);
}

gulp.task('build', () => {
  browserify({entries: config.build.entries})
    .transform(babelify)
    .bundle()
    .on('error', errorHandler)
    .pipe(source(config.build.source))
    .pipe(buffer())
    .pipe(gulp.dest(config.build.dest))
    .pipe(browserSync.reload({stream: true}));

   browserify({entries: ['./app/route.js']})
    .transform(babelify)
    .bundle()
    .on('error', errorHandler)
    .pipe(source('route.js'))
    .pipe(buffer())
    .pipe(gulp.dest(config.build.dest))
    .pipe(browserSync.reload({stream: true}));
});
