import React from "react";
import { db } from "./firebase";
//import AdbIcon from '@material-ui/icons/Adb';


const PlaceItem = ({ id,azukeru,uketoru,name,time}) => {
    //TaskItemのdeleteを参考に記述。
    console.log(db.collection("irai").doc(id).get());

  return (
  
    <tr key={id}>
      <th>預け地:</th>
      <td>{azukeru}/</td>
      <th>受取り地:</th>
      <td>{uketoru}/</td>


      <th>名前:</th>
      <td>{name}/</td>
      <td>{time}</td>

    </tr>
    
  );


};



export default PlaceItem;