import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Menu from "./Menu";
import InGame from "./InGame";
import Winner from "./Winner";
import Looser from "./Looser";

const history = createBrowserHistory();

const App = () => {
  console.log("travail utile");
  const [difficulty, setDifficulty] = useState(undefined);
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/">
              <Menu setDifficulty={setDifficulty} />
            </Route>
            <Route exact path="/InGame">
              <InGame difficulty={difficulty} />
            </Route>
            <Route exact path="/Winner">
              <Winner />
            </Route>
            <Route exact path="/Looser">
              <Looser />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
