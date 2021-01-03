import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Data from "./Data";
import Place from "./Place";
import MapWithADirectionsRenderer from "./reactMap";





//jqueryの読み込み
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

//ReactDOM.render(<GoogleMapComponent />, document.getElementById("root"));
ReactDOM.render(<MapWithADirectionsRenderer directions />, document.getElementById("root"));