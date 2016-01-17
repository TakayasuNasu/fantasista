import express from 'express';
import session from 'express-session';
import dispach from './routes';
import path from 'path';
import bodyParser from 'body-parser';
import passport from 'passport';
import { Strategy } from 'passport-local';

export default function init(app) {
  app.set('port', (process.env.PORT || 3000));
  app.set('views', path.join(__dirname, './../views'));
  app.set('view engine', 'jade');

  app.use(express.static(path.join(__dirname, './../public')));
  app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new Strategy(
    (username, password, done) => {
      console.log(345);
      return done(null, true, { message: 'hoge' });
    }
  ));

  dispach(app);

  app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

}
