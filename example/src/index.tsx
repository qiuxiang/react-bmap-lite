import * as React from "react";
import { render } from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import Main from "./main";

render(
  <HashRouter>
    <Switch>
      <Route path="/" component={Main} exact />
    </Switch>
  </HashRouter>,
  document.getElementById("main")
);
