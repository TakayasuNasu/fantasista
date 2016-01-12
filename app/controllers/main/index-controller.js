import Comment from "../../models/comment";

export default class IndexController {
  constructor() {
    this.comment = new Comment('The world!!!');
  }

  index(req, res) {
    res.render('main/index', { title: 'Hello world' });
  }

  hello(req, res) {
    res.render('main/index/hellos',
      {
        title:   this.comment.getTitle(),
        content: this.comment.getContent()
      });
  }
}
