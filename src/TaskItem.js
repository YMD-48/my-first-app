import React from "react";
import { db } from "./firebase";
//import AdbIcon from '@material-ui/icons/Adb';

const TaskItem = ({ id,azukeru,uketoru,item1,item2,item3,item4,item5, name,mail,phone,time}) => {
  const DeleteInputData = () => {
    db.collection("irai").doc(id).delete();
  };
  return (
  
    <tr key={id}>
      <th>預け地:</th>
      <td>{azukeru}/</td>
      <th>受取り地:</th>
      <td>{uketoru}/</td>

      <th>タイプ1:</th>
      <td>{item1}/</td>
      <th>タイプ2:</th>
      <td>{item2}/</td>
      <th>タイプ3:</th>
      <td>{item3}/</td>
      <th>タイプ4:</th>
      <td>{item4}/</td>
      <th>タイプ5:</th>
      <td>{item5}/</td>

      <th>名前:</th>
      <td>{name}/</td>
      <th>アドレス:</th>
      <td>{mail}/</td>
      <th>電話番号:</th>
      <td>{phone}/</td>
      <td>{new Date(time?.toDate()).toLocaleString()}</td>



      <td>
      <button onClick={DeleteInputData}>削除
      </button>
      </td>
    </tr>
    
  );


};



export default TaskItem;