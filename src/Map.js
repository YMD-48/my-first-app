/*global google*/
import React from 'react';
import { db } from "./firebase";
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
import { render } from '@testing-library/react';

     


      

const MapWithADirectionsRenderer = compose(


  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDTLyFAxJqkD9w4Kr4Ju0MJNH_rrs3Ygnk&v=3.exp&libraries=drawing,geometry,places,visualization",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `80%`,width: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  

  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      var wayPoints = new Array();
      
      //下記のように直接入力は入る。
      /*
      wayPoints.push({location: '東京タワー'});
      wayPoints.push({location: 'スカイツリー'});
      */
    render(function(querySnapshot) {
     for (var i=1; i<=querySnapshot.size; i++) {
      wayPoints.push({location :"清水寺"});
      console.log("繰り返し"+wayPoints);
    }
    
    });

      //データベースアクセスのFOR文はなぜかダメ
      db.collection("irai").where("status", "==", "×")
      .get()
      .then(function(querySnapshot) {    
            //console.log(doc.id, " => ", doc.data().azukeru);
            console.log(querySnapshot.size);
            wayPoints.push({location: '東京タワー'});
            ///if(querySnapshot.size===null){
              ///console.log("全ての配達終了");
            ///};
            for (var i=1; i<=querySnapshot.size; i++) {
              wayPoints.push({location :"清水寺"});
            }
            console.log(wayPoints);
        
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });

      DirectionsService.route(
       /// console.log(wayPoints),

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

     // new window.google.maps
      
          // ルートをクリア
      const clearRoute = function() {
        DirectionsService.setMap(null);
        //$('#route-panel').html('');
        //$('#result').addClass('hidden');
      };

      //for文で経由地点分を繰り返して、場所の値をとってくるパターン。


      
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