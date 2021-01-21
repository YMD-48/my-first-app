
import React, { useState } from "react";
import "./reset.css";
import "./style.css";
import { BrowserRouter as Link } from "react-router-dom";



import ImgPath_small from "./images/small.jpg";
import ImgPath_middle from "./images/middle.jpg";
import ImgPath_large from "./images/large.jpg";
import ImgPath_sonota from "./images/sonota.jpg";




const App = () => {
  // 1.記述
  /*
  const [data, setData] = useState([{
    id: "",
    name: "",
    azukeru:"",
    uketoru:"",
    item1:"",
    item2:"",
    item3:"",
    item4:"",
    item5:"",
    name:"",
    mail:"",
    phone:"",
    time:null

  }]);
  */
  // 記述登録1
  const [inputItem1, setInputItem1] = useState("0");
  const [inputItem2, setInputItem2] = useState("0");
  const [inputItem3, setInputItem3] = useState("0");
  const [inputItem4, setInputItem4] = useState("0");

  

  // 記述登録２
  
  const handleInputChangeItem1 = (e) => {
    console.log(e, "event");
    setInputItem1(e.target.value); //inputValueに値を書き込む（更新）
  };
  const handleInputChangeItem2 = (e) => {
    console.log(e, "event");
    setInputItem2(e.target.value);
  };
  const handleInputChangeItem3 = (e) => {
    console.log(e, "event");
    setInputItem3(e.target.value);
  };
  const handleInputChangeItem4 = (e) => {
    console.log(e, "event");
    setInputItem4(e.target.value);
  };
 

  /*      
    setInputName(e.target.value);
    setInputMail(e.target.value);
    setInputPhone(e.target.value);
  */
 
  // 記述登録3
  const addInputData = () => {
    
    /*
    db.collection("irai").add({
      azukeru: inputAzukeru,
      uketoru: inputUketoru,
      item1: inputItem1,
      item2: inputItem2,
      item3: inputItem3,
      item4: inputItem4,
      item5: inputItem5,
      name: inputName,
      mail: inputMail,
      phone: inputPhone,
      time: firebase.firestore.FieldValue.serverTimestamp()


    });
    */
   localStorage.removeItem("Items1");
   localStorage.removeItem("Items2");
   localStorage.removeItem("Items3");
   localStorage.removeItem("Items4");


    var obj1 =inputItem1;
    var obj2 =inputItem2;
    var obj3 =inputItem3;
    var obj4 =inputItem4;

    
    localStorage.setItem("Items1",obj1);
    localStorage.setItem("Items2",obj2);
    localStorage.setItem("Items3",obj3);
    localStorage.setItem("Items4",obj4);


    /*
    setInputItem1(""); //inputValueに値を書き込む（更新）
    setInputItem2("");
    setInputItem3("");
    setInputItem4("");
    setInputItem5("");
    setInputName("");
    setInputMail("");
    setInputPhone("");
    */
    

  };

  // 2.記述
  /*
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
          item5:dbData.data().item5,
          name:dbData.data().name,
          phone:dbData.data().phone,
          mail:dbData.data().mail,
          time: dbData.data().time

        }))
      );
    });

    return () => firebaseData();
  }, []); //←ここに最後一つ書きたします
*/
  // // ここに記述,useStateで作ったdata変数をコンソールログで表示
  //console.log(data);



  return (

    
    <div className="Items">
      <h1>荷物の種類と個数</h1>

      {/* 登録の処理 */}
      <form>

        <tr class="table">
        {/* inputタグ */}
        <td>
          <img src={ImgPath_small}/>
        </td>
        <td class="table_td">
          <input class="Itembase"
              type="number"
              defaultValue="0"
              min="0"
              max="30"
              label="タイプ１"
              value={inputItem1}
              onChange={handleInputChangeItem1}
            />
        </td>
        </tr>

        <tr class="table">
        {/* inputタグ */}
        <td>
        <img src={ImgPath_middle}/>
        </td>
        <td class="table_td">
          <input class="Itembase"
            type="number"
            defaultValue="0"
            min="0"
            max="30"
            label="タイプ２"
            value={inputItem2}
            onChange={handleInputChangeItem2}
          />
        </td>
        
        </tr>

        <tr class="table">
        {/* inputタグ */}
        <td>
        <img src={ImgPath_large}/>
        </td>
        <td class="table_td">
          <input class="Itembase"
              type="number"
              defaultValue="0"
              min="0"
              max="30"
              label="タイプ3"
              value={inputItem3}
              onChange={handleInputChangeItem3}
            />
        </td>
       
        </tr>

        <tr class="table">
        {/* inputタグ */}
        <td>
        <img src={ImgPath_sonota}/>
        </td>
        <td class="table_td">
          <input class="Itembase"
              type="number"
              defaultValue="0"
              min="0"
              max="30"
              label="タイプ4"
              value={inputItem4}
              onChange={handleInputChangeItem4}
            />
        </td>

        
        </tr>
        <br/>
      </form>

      <div className="next_button">
        <button className="next_button" onClick={addInputData}>
        <Link to="/Kakunin"><a href="/Kakunin">確認画面へ進む</a></Link>

        </button>
      </div>   

    </div>
      
     

   
  );
};
export default App;