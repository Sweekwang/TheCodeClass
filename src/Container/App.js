import React, {Fragment} from 'react';
import { Route, BrowserRouter, NavLink, Switch } from "react-router-dom";
import './App.css';

import Home from "../Site/Home";

import Uikit from "../Site/References/uikit/Steppers/Steepers";

function App() {
  return (
    <Fragment>
    <BrowserRouter>
        <Switch>
          <Route path ="/" exact component = {Home}/>
          <Route path ="/references/ios/uikit/stepper-creation" exact component = {Uikit}/>
        </Switch>
        </BrowserRouter>
    </Fragment>
  );
}

export default React.memo(App);
