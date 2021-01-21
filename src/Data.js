import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import { db } from "./firebase";
import "./reset.css";
import "./style.css";
import Map from './Map';



////データの読み込みだけ行う


const Data = () => {
  const [data, setData] = useState([{
    id: "",
    name: "",
    azukeru:"",
    uketoru:"",
    item1:"",
    item2:"",
    item3:"",
    item4:"",
    name:"",
    mail:"",
    phone:"",
    time:null,
    status:""
  
  }]);

  useEffect(() => {
    const firebaseData = db
    .collection("irai")
    .orderBy("name", "asc")
    .onSnapshot((snapshot) => {
      setData(
        snapshot.docs.map((dbData) => ({
          id: dbData.id,
          azukeru: dbData.data().azukeru,
          uketoru: dbData.data().uketoru,
          item1:dbData.data().item1,
          item2:dbData.data().item2,
          item3:dbData.data().item3,
          item4:dbData.data().item4,
          name:dbData.data().name,
          phone:dbData.data().phone,
          mail:dbData.data().mail,
          time: dbData.data().time,
          status: dbData.data().status,

        }))
      );
    });
    
    
    return () => firebaseData();
    

  }, []);
  
  /*未完*/
    function Test (){

      const firebaseData = db
      .collection("irai")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) => {
        setData(
          snapshot.docs.map((dbData) => ({
            id: dbData.id,
            azukeru: dbData.data().azukeru,
            uketoru: dbData.data().uketoru,
            item1:dbData.data().item1,
            item2:dbData.data().item2,
            item3:dbData.data().item3,
            item4:dbData.data().item4,
            name:dbData.data().name,
            phone:dbData.data().phone,
            mail:dbData.data().mail,
            time: dbData.data().time,
            status: "〇",
  
          }))
        )})

        return () => firebaseData();
      }
        
  
  
  return (
    
   <>
   <Map></Map>
    <div>
      {/* dataっていう変数のなかに全てのデータが入っているのでmapを使って展開 */}
      {data.map((dataItem) => (
        ///<h1 key={dataItem.id}>{dataItem.title}</h1>
    
       <div>
          <TaskItem
          id={dataItem.id}
          azukeru={dataItem.azukeru}
          uketoru={dataItem.uketoru}
          item1={dataItem.item1}
          item2={dataItem.item2}
          item3={dataItem.item3}
          item4={dataItem.item4}
          name={dataItem.name}
          mail={dataItem.mail}
          phone={dataItem.phone}
          status={dataItem.status}
          >
          
          </TaskItem>
      

      </div>

      ))}
    </div>
    <div className="next_button">
      <button onClick={Test}>配達全て完了</button>
    </div>
  </>

  )

  
};

export default Data;

 
