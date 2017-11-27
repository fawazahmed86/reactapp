import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Nav from "./components/Nav";
import Articles from "./Pages/Articles"
import Saved from "./Pages/Saved";


const App = () =>

  <Router>
    <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={Articles} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
    </div>
  </Router>

export default App;