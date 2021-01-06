import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import { db } from "./firebase";
import PlaceItem from "./PlaceItem";
import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


const Place = () => {
  
  const [data, setData] = useState([{
    id: "",
    name: "",
    azukeru:"",
    uketoru:"",
    time:""
  
  }]);

  useEffect(() => {

    const firebaseData = db
    .collection("irai")
    .orderBy("name", "asc")
    .onSnapshot((snapshot) => {
      setData(
        /* dataっていう変数のなかに全てのデータが入っているのでmapを使って展開 */
        snapshot.docs.map((dbData) => ({
          id: dbData.id,
          azukeru: dbData.data().azukeru,
          uketoru: dbData.data().uketoru,
          name:dbData.data().name,
          time:firebase.firestore.FieldValue.serverTimestamp()
        
        }))
      );      
    });
      

    return () => firebaseData();


  }, []);
  
  //上からデータが来ます＝props
  const Post = (props) =>{

    return(
      <>
      <div>{props.data}</div>
      </>
    )

}
  

  //条件指定でデータを抜き出す予定のコード

  db.collection("irai").where("status", "==", "×")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        
        console.log(doc.id, " => ", doc.data().azukeru);
        console.log(querySnapshot.size);
        ///if(querySnapshot.size===null){
          ///console.log("全ての配達終了");
        ///};
        
      });
  })
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  });
  


  return (
   
      /* dataっていう変数のなかに全てのデータが入っているのでmapを使って展開 */
      data.map((setData) => (
        ///<h1 key={dataItem.id}>{dataItem.title}</h1>
    
        <>
          <PlaceItem
          key={setData.id}
          azukeru={setData.azukeru}
          uketoru={setData.uketoru}
          name={setData.name}
        
          />
          


         <textarea defaultValue={setData.azukeru}>

         </textarea>

        </>  
      
      ))   
  )

  
};

export default Place;

 
