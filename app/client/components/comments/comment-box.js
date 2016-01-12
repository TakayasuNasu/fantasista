import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import CommentList from './comment-list';
import CommentForm from './comment-form';

export default class CommentBox extends Component {
  componentDidMount() {
    this.props.fetchComments();
    setInterval(this.props.fetchComments, 20000);
  }

  render() {
    const {comments, saveComment} = this.props;
    return (
      <div className="commentBox">
        <CommentList comments={comments} />
        <CommentForm onCommentSubmit={saveComment} />
      </div>
    );
  }
}

CommentBox.propTypes = {
  saveComment : PropTypes.func.isRequired,
  comments : PropTypes.array.isRequired
};
