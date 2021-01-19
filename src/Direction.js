import React, { useState, useCallback } from "react";
import { DirectionsRenderer, DirectionsService } from "@react-google-maps/api";
import { db } from "./firebase";

export default function Direction() {
  const origin = { lat: 42.755955, lng: 141.32816 };
  // 始点を指定する
  const destination = { lat: 45.299023, lng: 141.65308 };
  // 終点を指定する
  const wayPoints = [{location:"東京タワー"}];
  // 経由地を（順不同で）指定する

  const [currentDirection, setCurrentDirection] = useState(null);
  // ここにDirectionsServiceへのAPIコールで得られたルート情報を保存する

  
        //console.log(currentDirection.geocoded_waypoints.length);

  const directionsCallback = useCallback((googleResponse) => {
    if (googleResponse) {
      if (currentDirection) {
        
        db.collection("irai").where("status", "==", "×")
        .get()
        .then((querySnapshot,doc)=>  {

          for (var i=1; i<=1; i++) {
            currentDirection.push({location: "京都駅"});
            
            //googleResponse.geocoded_waypoints.push(currentDirection.request.waypoints);

          }

          //currentDirection.request.waypoints = wayPoints;
         
          console.log(currentDirection.request.waypoints)
          console.log(currentDirection)
          //this.setCurrentDirection({directions: currentDirection})

          
             // console.log(doc.id, " => ", doc.data().azukeru);
              //console.log(querySnapshot.size);
          return(currentDirection);
              //return({currentDirection:wayPoints}); 
              ///if(querySnapshot.size===null){
                ///console.log("全ての配達終了");
              ///};
              
             //for (var i=1; i<=querySnapshot.size; i++) {
                //wayPoints.push({location: doc.data().azukeru});
              //}
              
              //console.log("1ここ"+this);
        }).catch(function(error) {
          console.log("Error getting documents: ", error);
      })
    /*    
    currentDirection.geocoded_waypoints = wayPoints;
    googleResponse.geocoded_waypoints.push(currentDirection.geocoded_waypoints);
    */
    
    console.log(this);
    console.log(currentDirection.geocoded_waypoints)
    console.log(googleResponse.geocoded_waypoints)
    console.log(googleResponse.request.waypoints)
    
        if (
          googleResponse.status === "OK" &&
          googleResponse.geocoded_waypoints.length !==
            currentDirection.geocoded_waypoints.length
        ) {
          console.log("ルートが変更されたのでstateを更新する");
          setCurrentDirection(googleResponse);
        } else {
          console.log("前回と同じルートのためstateを更新しない");
        }
      } else {
        if (googleResponse.status === "OK") {
          console.log("初めてルートが設定されたため、stateを更新する");
          setCurrentDirection(googleResponse);
        } else {
          console.log("前回と同じルートのためstateを更新しない");
        }
      }
    }
  });
  // (1) DirectionsServiceコンポーネントはレンダーされるとルート検索し、結果をcallbackとして返す。
  // (2) このAPIレスポンスを今回のようにstateに保存すると、stateが変わったことにより、DirecitonsServiceコンポーネントが再度レンダーされる。
  // (3) DirectionsServiceコンポーネントがレンダーされると再度APIコールを行う。
  // 上記(1)~(3)の無限ループを防ぐため、(3)の結果がstateと変わらなければstateを更新しない、という処理を上記に実装した

  return (
    <>
      <DirectionsService
        options={{
          origin,
          destination,
          travelMode: "DRIVING",
          // 走行モードを指定する。今回は自動車に設定
          optimizeWaypoints: true,
          // 経由地の順序を最適化する場合はtrueに設定する
          waypoints: wayPoints,
        }}
        callback={directionsCallback}
      />
      {currentDirection !== null && (
        <DirectionsRenderer
          options={{
            directions: currentDirection,
          }}
        />
        // DirectionsServiceのAPI検索の結果としてcurrenctDirectionがあれば、その結果をDirectionsRendererで表示する。
        // 予めルート情報を持っていれば、DirecitonsServiceでAPIコールする必要はない。
      )}
    </>
  );
}

