import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/Show";

function App() {
  return (
    //entry points
    //1. exact={true} can be written as exact only.
    <div>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>

        <Route exact={true} path="/starred">
          <Starred />
        </Route>

        <Route exact path="/show/:id">
          <Show />
        </Route>

        <Route>This is 404 page</Route>
      </Switch>
    </div>
  );
}

export default App;
