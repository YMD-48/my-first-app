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

     
//const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
      

const AukeruMap = compose(


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
        

        const map = new google.maps.Map(document.getElementById("map"), {
            center: "sydney",
            zoom: 15,
          });

      const Service = new google.maps.places.PlacesService(map);
      const DirectionsService = new google.maps.DirectionsService();
      const DirectionsRenderer = new google.maps.DirectionsRenderer();

      
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

     const request = {
        placeId: 'ChIJ9xzt5AYVkFQRTSTBq6a4nWc',
        fields: ['name', 'business_status']
      };
      function callback(place, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) return;
        if (place.business_status) {
            console.log(`${place.name} is currently ${place.business_status}.`);
        }
    }
      
      const service = new google.maps.places.PlacesService(map);
      service.getDetails(request, callback);
    
            //リクエストを送ってあげるとプライス情報を格納したオブジェクトを返してくれます。
            function Map(e){
                Service.textSearch({   
               request
            },callback);
        }
        
    }

      //データベースアクセスのFOR文はなぜかダメ

            
            
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
        

    


      

     // new window.google.maps
      
          // ルートをクリア
      //const clearRoute = function() {
        //DirectionsService.setMap(null);
        //$('#route-panel').html('');
        //$('#result').addClass('hidden');
      

      //for文で経由地点分を繰り返して、場所の値をとってくるパターン。


      
    
})
)(props =>(
  <>
  <GoogleMap defaultZoom={10} defaultCenter={{}}>
  
  </GoogleMap>
  
    <tr style={{ width: `100%` }}>
        <td>
          <input type="text" id="mapSearch" onchange={(e)=>Map(e.target.value)}></input>
        </td>
        <td>
          <button id="route-button">検索</button>
        </td>
    </tr>
  
</>

));

/*ReactDOM.render(
  < MapWithADirectionsRenderer directions />,
  document.getElementById("root")
);*/

export default AukeruMap;