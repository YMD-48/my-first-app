/*global google*/
import React,{useState} from 'react';
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

     

/*
 function Timeover(resultTime){
  const [Time,setTime] = useState([""]);
  setTime(resultTime);
  return (
    <div>{Time}</div>
  );
}
   
Timeover();

*/

const Map = compose(


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
      //const DirectionsRenderer = new google.maps.DirectionsRenderer();
      var wayPoints = new Array();

     
      
      
      //const [resultTime,setresultTime] = useState(0);
      
      //下記のように直接入力は入る。
      /*
      wayPoints.push({location: '東京タワー'});
      wayPoints.push({location: 'スカイツリー'});
      
      render(function(querySnapshot) {
     for (var i=1; i<=querySnapshot.size; i++) {
      wayPoints.push({location :"清水寺"});
      console.log("繰り返し"+wayPoints);
      }
    
     });
      */

      const mainMap0 = () =>{
        navigator.geolocation.watchPosition((position) => {
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          
        },
        (err) => {
          console.log(err);
        })
      };

      //データベースアクセスのFOR文はなぜかダメ
  
      const mainMap1 = ()=> { 
      const data = db.collection("irai").where("status", "==", "×")
      .get()
      .then(function(querySnapshot) {   
        querySnapshot.forEach(function(doc) { 
            //console.log(doc.id, " => ", doc.data().azukeru);
            console.log(querySnapshot.size);
            //wayPoints.push({location: '東京タワー'});
            ///if(querySnapshot.size===null){
              ///console.log("全ての配達終了");
            ///};
            
              wayPoints.push({location :doc.data().azukeru});
            
            console.log(wayPoints);
        
      }
      )})
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });

      return data;
      
    };


    const mainMap2 = ()=>{DirectionsService.route(
       /// console.log(wayPoints),

        {
          origin: new google.maps.LatLng({lat: this.state.lat, lng: this.state.lng}),
          destination: new google.maps.LatLng({lat: this.state.lat, lng: this.state.lng}),
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
            console.log(result);
            var sec = 0;

            for(var i=0;i<result.routes[0].legs.length;i++){
              sec += result.routes[0].legs[i].duration.value;
              console.log(result.routes[0].legs[i].duration)
              console.log(sec)
            }

            console.log(sec)

            const resultTime = sec/60;
            
            /*
            this.setresultTime{
              resultTime;
            }
            */
            console.log(resultTime)

            return resultTime;
            
            /*
        function cal (result,data){
        DirectionsRenderer.setDirections(result);
				var points = result.routes[0].waypoint_order;
				var legs = result.routes[0].legs;
				
				// 総距離と総時間の合計する
				var dis = 0;
				var sec = 0;
				for(var i=1; i<data.length; i++) {
          console.log(data.length)
					//sec += val.duration.value;
					//dis += val.distance.value;
				};
				console.log("distance=" + dis + ", secound=" + sec);
			
      }
      
      cal;
      }
			}

           */
        
    }})};
    

      async function processAll() {
        await mainMap0();
        await mainMap1();
        await mainMap2();
        //Timeover();

      };
      
      processAll();
      
      

     // new window.google.maps
      
          // ルートをクリア
      //const clearRoute = function() {
        //DirectionsService.setMap(null);
        //$('#route-panel').html('');
        //$('#result').addClass('hidden');
      

      //for文で経由地点分を繰り返して、場所の値をとってくるパターン。


      
    }
  })
)(props =>(
  
  <>
  <GoogleMap defaultZoom={10} defaultCenter={{origin}}>
    
  {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
  

  </>

));

/*ReactDOM.render(
  < MapWithADirectionsRenderer directions />,
  document.getElementById("root")
);*/

export default Map;