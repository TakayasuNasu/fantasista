import React from "react";
import ReactDOMServer from 'react-dom/server';
import CommentBox from "../../client/components/comment";

export default class Hello {
  getContent() {
    return ReactDOMServer.renderToString(<CommentBox />);
  }
}
