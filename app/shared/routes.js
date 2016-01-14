import React from "react";
import { Router, Route, Link, browserHistory } from "react-router";

import MemoList from "../client/components/memos/memo-list";
import Memo from "../client/components/memos/memo-list";

export default (
  <Router history={browserHistory}>
    <Route path="/memo" component={ MemoList }>
      <Route path="/memo/:id" component={ Memo } />
    </Route>
  </Router>
);
