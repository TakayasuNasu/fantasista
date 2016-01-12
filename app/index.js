import React from 'react';
import ReactDOM from 'react-dom';
import Comment from "./models/comment";

const comment = new Comment();
ReactDOM.render(comment.getCommentJsx(), document.getElementById('content'));
