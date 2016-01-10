import express from 'express';
import dispach from './routes';
import path from 'path';
import bodyParser from 'body-parser';

export default function init(app) {
  app.set('port', (process.env.PORT || 3000));
  app.set('views', path.join(__dirname, './../views'));
  app.set('view engine', 'jade');

  app.use(express.static(path.join(__dirname, './../public')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  dispach(app);

  app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

}
