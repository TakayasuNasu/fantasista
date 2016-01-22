import React from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router'

export default class MemoList extends React.Component {
  render() {
    return(
      <div>
        <header>
          this is header
          <li><Link to="/memo/id">ID</Link></li>
          <li><Link to="/memo/form">Form</Link></li>
        </header>
          {this.props.children}
        <footer>
          this is footer
        </footer>
      </div>
    );
  }
}
