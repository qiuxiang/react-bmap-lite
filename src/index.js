import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import Main from "./main";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" component={Main} exact />
    </Switch>
  </HashRouter>,
  document.getElementById("main")
);
