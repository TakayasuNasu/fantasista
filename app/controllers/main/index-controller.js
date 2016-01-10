import React from "react";
import CommentBox from "../../public/js/index";

export default class IndexController {
  constructor() {

  }

  index(req, res) {
    res.render('main/index', { title: 'Hello world' });
  }

  hello(req, res) {
    let content = React.renderToString(<CommentBox />);
    res.render('main/index', { title: 'the world!!!', content: content });
  }
}
