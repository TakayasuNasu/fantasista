
export default class AuthController {
  constructor(name = "login") {
    this.name = name;
  }

  login(req, res) {
    res.render('main/auth/login', { title: this.name });
  }

}
