import Comment from "../../models/comments/comment";

export default class IndexController {
  constructor() {
    this.comment = new Comment();
  }

  index(req, res) {
    res.render('main/index', { title: 'Hello world' });
  }

  hello(req, res) {
    res.render('main/index/hellos',
      {
        title:   'the world!!!',
        content: this.comment.getContent()
      });
  }
}
