import React from "react";
import { Router, Route, IndexRoute, Link, browserHistory } from "react-router";

import MemoList from "../client/components/memos/memo-list";
import Memo from "../client/components/memos/memo";
import MemoForm from "../client/components/memos/memo-form";

export default (
  <Router history={browserHistory}>
    <Route path="/" component={ MemoList }>
      <IndexRoute component={Memo} />
      <Route path="/memo/id" component={ Memo } />
      <Route path="/memo/form" component={ MemoForm } />
    </Route>
  </Router>
);
