import React from "react";
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import Helmet from "react-helmet";
import routes from "../../shared/routes";
import Memo from "../../models/memo";

export default class MemoController {
  constructor() {
    this.memo = new Memo('memo');
  }

  index(req, res) {
    match({ routes, location: req.originalUrl },
      (error, redirectLocation, renderProps) => {
        if (error) {
          res.status(500).send(error.message);
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
          let content = renderToString(<RoutingContext {...renderProps} />);
          let head = Helmet.rewind();
          res.render('main/memo', {
            title:   this.memo.title,
            content: content,
            meta:    head.meta.toString()
          });
        }
    });
  }

}
