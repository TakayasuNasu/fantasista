import React from "react";
import ReactDOMServer from 'react-dom/server';
import CommentBox from "../../client/components/comments/comment";

export default class Comment {
  getContent() {
    return ReactDOMServer.renderToString(<CommentBox />);
  }
}
