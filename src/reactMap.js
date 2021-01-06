/*global google*/
import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./style.css";
//import { DirectionsRenderer } from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,

} from "react-google-maps";







const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDTLyFAxJqkD9w4Kr4Ju0MJNH_rrs3Ygnk&v=3.exp&libraries=drawing,geometry,places,visualization",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `60%`,width: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  

  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
          // ルートをクリア
      const clearRoute = function() {
        DirectionsService.setMap(null);
        //$('#route-panel').html('');
        //$('#result').addClass('hidden');
      };

      //for文で経由地点分を繰り返して、場所の値をとってくるパターン。
      var wayPoints = new Array();
      for (var i=1; i<=6; i++) {
        wayPoints.push({location :i});
      }
      
    //var way1 = useRef(null);
    /*
    //単純に経由地点を入れているパターン。
     var wayPoints = new Array();
     wayPoints.push({location: '東京タワー'});
     wayPoints.push({location: 'スカイツリー'});
     wayPoints.push({location: ''});
     wayPoints.push({location: ''});
     wayPoints.push({location: ''});
     */

      DirectionsService.route(
        {
          origin: new google.maps.LatLng(35.6809591, 139.7673068),
          destination: new google.maps.LatLng(35.6598003, 139.7023894),
          avoidHighways: true,
          travelMode: google.maps.TravelMode.DRIVING,
          optimizeWaypoints:  true,
          waypoints: wayPoints

        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );



    }
  })
)(props =>(
  <>
  <GoogleMap defaultZoom={8} defaultCenter={{ lat:35.6809591, lng:139.7673068}}>
  {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
  
  <div id="route-condition" class="form-group">
    <tr style={{ width: `100%` }}>
        <td>
          <button id="route-button">検索</button>
        </td>
        <td>
          <button>クリア</button>
        </td>
    </tr>
    <br/>
    <tr style={{ width: `100%`,display: `flex` }}>
      <td>
          <span>出発地</span><br/>
          <input type="text" id="start"></input>
      </td>
    </tr>
    <tr>
      <td>
          <span>経由地1</span><br/>
          <input type="text" id="way1"></input>
      </td>
    </tr>
    <tr>
      <td>
          <span>経由地2</span><br/>
          <input type="text" id="way2"></input>
      </td>
    </tr>
    <tr>
      <td>
          <span>経由地3</span><br/>
          <input type="text" id="way3"></input>
      </td>
    </tr>
    <tr>
      <td>
          <span>経由地4</span><br/>
          <input type="text" id="way4"></input>
      </td>
    </tr>
    <tr>
      <td>
          <span>経由地5</span><br/>
          <input type="text" id="way5"></input>
      </td>
    </tr>
    <tr>
      <td>
          <span>到着地</span><br/>
          <input type="text" id="end"></input>
      </td>
    </tr>
  </div>
</>

));

/*ReactDOM.render(
  < MapWithADirectionsRenderer directions />,
  document.getElementById("root")
);*/

export default MapWithADirectionsRenderer;