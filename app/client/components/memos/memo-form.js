import React from 'react'
import { render } from 'react-dom';
import Helmet from "react-helmet";

export default class MemoForm extends React.Component {
  render() {
    return(
      <h3>
        <Helmet
          title="My Title"
          meta={[
            {"name": "description", "content": "Helmet application"}
          ]} />
        memo form
      </h3>
    );
  }
}
