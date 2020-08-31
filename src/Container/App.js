import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import './App.css';

import Home from "../Site/Home";

import Uikit from "../Site/References/uikit/Steppers/Steepers";

// Error Pages:
import Error404 from "../Site/Error/Error404";

function App() {
  return (
    <BrowserRouter basename = "/">
        <Switch>
          {/* UIKit References */}
          <Route path ="/references/ios/uikit/stepper-creation" exact component = {Uikit}/>

          {/* Home Pages: */}
          <Route path ="/" exact component = {Home}/>

          {/* Error Pages: */}
          <Route path ="*" exact component = {Error404}/>
        </Switch>
      </BrowserRouter>
  );
}

export default React.memo(App);
