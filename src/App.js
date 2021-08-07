import React from "react";
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    //entry points
    //1. exact={true} can be written as exact only.
    <Switch>

      <Route exact={true} path="/">
        This is Home page 
      </Route>

      <Route exact={true} path="/starred">  
        This is starred. 
      </Route>

      <Route>
        This is 404 page
      </Route>
    </Switch>
  );
}

export default App;
