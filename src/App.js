import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Menu from "./Menu";
import InGameEasy from "./InGameEasy";
import InGameHard from "./InGameHard";
import Winner from "./Winner";
import Looser from "./Looser";

const history = createBrowserHistory();

const App = () => {
  console.log("travail utile");
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/">
              <Menu />
            </Route>
            <Route exact path="/InGameEasy">
              <InGameEasy />
            </Route>
            <Route exact path="/InGameHard">
              <InGameHard />
            </Route>
            <Route exact path="/Winner">
              <Winner />
            </Route>
            <Route exact path="/Looser">
              <Looser />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
