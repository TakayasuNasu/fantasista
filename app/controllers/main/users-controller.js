

export default class UserController {
  constructor(name = "hoge") {
    this.name = name;
  }

  index(req, res, next) {
    res.render('main/index', { title: `${this.name} is ${req.params.id}` });
  }

}
