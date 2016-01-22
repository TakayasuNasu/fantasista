import React, { Component, PropTypes } from 'react';
import Comment from './comment'
import Draggable from '../draggable/draggable'
import Waypoint from 'react-waypoint';

export default class CommentList extends Component {
  constructor() {
    super()
    this.state = { message: '' };
  }

  setMessage(msg) {
    this.setState({ message: msg });
  }

  renderMessage() {
    if (!this.state.message) {
      return;
    }

    return(
      <div className="message">
        {this.state.message}
      </div>
    );
  }

  render() {
    const commentNodes = this.props.comments.map((comment, index) => {
      return (
        <Comment author={comment.author} key={index}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
        {this.renderMessage()}
        <div className="spacer" />
        <div className="spacer" />
        <div className="spacer" />
        <div className="spacer" />
        <div className="spacer" />
        <div className="waypoint-line"/>
        <Waypoint
          onEnter={this.setMessage.bind(this, 'Waypoint entered')}
          onLeave={this.setMessage.bind(this, 'Waypoint left')}
          threshold={0} />
        <div className="spacer" />
        <div className="spacer" />
        <div className="spacer" />
        <div className="spacer" />
        <div className="spacer" />
      </div>
    );
  }
}

CommentList.propTypes = {
  comments : PropTypes.array.isRequired
};
