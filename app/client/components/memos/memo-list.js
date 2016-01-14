import React from 'react'
import { render } from 'react-dom';

export default class MemoList extends React.Component {
  render() {
    return(
      <div>
        <header>
          this is header
        </header>
          {this.props.children}
        <footer>
          this is footer
        </footer>
      </div>
    );
  }
}
