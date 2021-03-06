import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withRouter } from "react-router";
import './App.css';
import Rest_Finder from "./restFinder/restfinder/src/rest_finder.js"
import WeatherApp from "./weather/weather/src/WeatherApp.js"
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li ><a href ="/" >
              Home</a>
            </li>
            <li ><a href ="/restFinder">
              Restaurant</a>
            </li>
            <li>< a href = "/Weather">
              Weather</a>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route  path="/restFinder">
          <Rest_Finder/>
          </Route>
          <Route path="/Weather">
          <WeatherApp/>
          </Route>
          <Route  path="/" >
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
