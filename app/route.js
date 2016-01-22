import React, { Component } from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import routes from "./shared/routes";

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about"  refresh="true">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class User extends Component {
  render() {
    return (
      <div>User</div>
    )
  }
}

render((routes), document.getElementById('content'));