import React from 'react';
import { render } from 'react-dom';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='commentBox'>
        Hello, world! I am a CommentBox.
        <p>hoge</p>
      </div>
    );
  }
}
