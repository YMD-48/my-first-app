import React from "react";
import ReactDOM from "react-dom";
import Data from "./Data";
import Map from "./Map";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';




const Test2 = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/" component={Data} />
      <Route path="/sub/:id" component={Map} />
    </Switch>
  </Router>
);

const TopPage = () => (
  <div>
    <div>Top Page Component</div>
    <SubPage />
  </div>
);

const SubPage = () => (
  <div>
    <Router>
      <div>
        <Link to="/sub/1"> sub1 </Link> <br />
        <Link to="/sub/2"> sub2 </Link>
      </div>
    </Router>
  </div>
);



export default Test2;