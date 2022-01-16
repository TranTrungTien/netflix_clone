import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Browser from "./features/pages/Browser";
import Home from "./features/pages/Home";
import SignIn from "./features/pages/SignIn";
import SignUp from "./features/pages/SignUp";
import DetailMovie from "./features/pages/Browser/DetailMovie";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/browser/movie/:MovieId">
            <DetailMovie />
          </Route>
          <Route path="/browser">
            <Browser />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
