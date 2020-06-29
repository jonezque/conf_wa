import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { SortArray } from './SortArray';
import { SortIntArray } from './SortIntArray';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Sort Float Arrays</Link>
          </li>
          <li>
            <Link to="/int">Sort Int Array</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <SortArray/>
          </Route>
          <Route path="/int">
            <SortIntArray/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
