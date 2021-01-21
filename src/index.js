import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import Data from "./Data";
import Map from "./Map";
import AzukeruMap2 from "./AzukeruMap2";
import Kakunin from "./Kakunin";
import Thanks from "./Thanks";
import Menu from "./Menu"





//jqueryの読み込み
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
ReactDOM.render(
    <Router>
        <Route exact path="/" exact component={Menu}></Route>
        <Route exact path="/Azukeru" exact component={AzukeruMap2}></Route>
        <Route exact path="/app" component={App}></Route>
        <Route exact path="/Kakunin" component={Kakunin}></Route>
        <Route exact path="/Data" component={Data}></Route>
        <Route exact path="/Thanks" component={Thanks}></Route>
    </Router>,
  document.getElementById("root"));
//ReactDOM.render(<Data />, document.getElementById("root"));
//ReactDOM.render(<PlaceItem />, document.getElementById("root"));
//ReactDOM.render(<Place />, document.getElementById("root"));
//ReactDOM.render(<GoogleMapComponent />, document.getElementById("root"));
//ReactDOM.render(<MapWithADirectionsRenderer directions />, document.getElementById("root"));
//ReactDOM.render(<MapWithADirectionsRenderer2 directions />, document.getElementById("root"));
//ReactDOM.render(<Map />, document.getElementById("root"));
//ReactDOM.render(<Map2 />, document.getElementById("root"));
//ReactDOM.render(<Test2 />, document.getElementById("root"));
//ReactDOM.render(<GoogleMapComponent/>, document.getElementById("root"));
//ReactDOM.render(<GoogleApiWrapper/>, document.getElementById("root"));
//ReactDOM.render(<current />, document.getElementById("root"));
//ReactDOM.render(<AzukeruMap />, document.getElementById("root"));
//ReactDOM.render(<GoogleMapComponent />, document.getElementById("root"));
//ReactDOM.render(<AzukeruMap2 />, document.getElementById("root"));
//ReactDOM.render(<MyMapComponent />, document.getElementById("root"));
