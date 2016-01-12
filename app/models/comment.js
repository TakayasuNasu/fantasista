import React from "react";
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from '../client/store/configureStore';
import App from '../client/containers/app';
import Base from './base-model';

export default class Comment extends Base{
  constructor(title = 'Hello world') {
    super(title);
  }

  getCommentJsx() {
    const store = configureStore();
    return <Provider store={store}><App /></Provider>
  }

  getContent() {
    return ReactDOMServer.renderToString(this.getCommentJsx());
  }
}
