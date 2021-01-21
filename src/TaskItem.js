import React from "react";
import { db } from "./firebase";
//import AdbIcon from '@material-ui/icons/Adb';

const TaskItem = ({ id,azukeru,uketoru,item1,item2,item3,item4, name,mail,phone,time,status}) => {

  const DeleteInputData = () => {
    db.collection("irai").doc(id).delete();

  };

  



  return (
  <>
    <tr key={id}>
      <th>ID:</th>
      <td>{id}</td>
    </tr>
    <tr>
      <th>集荷場:</th>
      <td>{azukeru}</td>
    </tr> 
    <tr>
      <th>配送先:</th>
      <td>{uketoru}</td>
    </tr>  
    <br/>

    <tr>
      <th>小:</th>
      <td>{item1}</td>
    </tr>
    <tr>  
      <th>中:</th>
      <td>{item2}</td>
    </tr>
    <tr>  
      <th>大:</th>
      <td>{item3}</td>
    </tr>
    <tr>
      <th>その他:</th>
      <td>{item4}</td>
    </tr>
    <br/>
      
    <tr>
    <th>名前:</th>
      <td>{name}</td>
    </tr>
    <tr>  
      <th>アドレス:</th>
      <td>{mail}</td>
    </tr>
    <tr>
      <th>電話番号:</th>
      <td>{phone}</td>
    </tr>
    <tr>  
      <th>依頼日時:</th>
      <td>{time}</td>
    </tr>
    <tr>  
      <th>状態</th>
      <td>{status}</td>
    </tr>


    <div className="next_button">
      <button onClick={DeleteInputData}>削除</button>
    </div>
  
  </>  
  );


};



export default TaskItem;