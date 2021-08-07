import React from "react";
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
import Starred from './pages/Starred';



function App() {
  return (
    //entry points
    //1. exact={true} can be written as exact only.
    <div>
    <Navs />
    <Switch>

      <Route exact={true} path="/">
        <Home/>
      </Route>

      <Route exact={true} path="/starred">  
        <Starred/>
      </Route>

      <Route>
        This is 404 page
      </Route>
    </Switch>
    </div>
  );
}

export default App;
