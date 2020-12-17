/* global google */
import React from 'react'




const Map = (props) => {

  //props.history.push("Map");
  ///APIリクエスト
  <>
      <script src="https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCRnSptxnNkGyCYRPMqBmWxoQ-sEfen_HY"
    async defer
    ></script>
    <script src="https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AnOTXYXwLujYGG_5cxUJxMckY59RExdztiBPAgLB2s_gIN7VOJvErkZxl95-4VhL" async defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </>
 
function test(){

    var map;
    var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);
      
      //function createMap(pyrmont) {
        map = new google.maps.Map(document.getElementById('map'),pyrmont);
        
        //, {
          //center: pyrmont,
         // zoom: 15
       // });
     // }
     // createMap(pyrmont);

  }

  ///データ受け取り

 

  return (

<>

 
 <div id="myMap">
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.720399410683!2d135.52378736610606!3d34.687005541457445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0cd5c283afd%3A0xf01d07d5ca11e41!2z5aSn6Ziq5Z-O!5e0!3m2!1sja!2sjp!4v1608035725840!5m2!1sja!2sjp"></iframe>


 </div>
 <button onClick={Map}>テスト</button>
 


</>
  )
 
}

export default Map
