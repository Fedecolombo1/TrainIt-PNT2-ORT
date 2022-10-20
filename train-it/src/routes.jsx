import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx'

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}