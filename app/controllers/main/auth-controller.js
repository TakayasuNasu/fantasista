import passport from 'passport';

export default class AuthController {
  constructor(name = "login") {
    this.name = name;
  }

  login(req, res) {
    res.render('main/auth/login', { title: this.name });
  }

  auth(req, res) {
    passport.authenticate('local', { failureRedirect: '/auth/login' }),
    (req, res) => {
      res.redirect('/hello');
    }
  }

}
