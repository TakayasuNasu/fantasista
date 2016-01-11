export default  {
  server: {
    script: './.bin/www',
    exec:   'DEBUG=express:* ./node_modules/.bin/babel-node',
    ext:    'js html css',
    ignore: ['node_modules']
  },
  browserSync: {
    target: 'http://localhost:3000',
    port:    8080
  },
  watch: {
    js:       './app/public/js/index.js',
    html:     './app/public/html/index.html',
    app:      './app/client/**/*.js',
    options: ['build']
  },
  build: {
    entries: ['./app/client/components/comments/comment.js'],
    source:  'bundle.js',
    dest:    './app/public/js'
  }
};
