import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import firebase from "firebase/app";
import { BrowserRouter as Link } from "react-router-dom";

import ImgPath_small from "./images/small.jpg";
import ImgPath_middle from "./images/middle.jpg";
import ImgPath_large from "./images/large.jpg";
import ImgPath_sonota from "./images/sonota.jpg";



const Kakunin = (props) => {

   
  const [inputName, setInputName] = useState("");
  const [inputMail, setInputMail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputText, setInputText] = useState("");

  const handleInputChangeName = (e) => {
    console.log(e, "event");
    setInputName(e.target.value); //inputValueに値を書き込む（更新）
  };
  const handleInputChangeMail = (e) => {
    console.log(e, "event");
    setInputMail(e.target.value); //inputValueに値を書き込む（更新）
  };
  const handleInputChangePhone = (e) => {
    console.log(e, "event");
    setInputPhone(e.target.value); //inputValueに値を書き込む（更新）
  };
  const handleInputChangeText = (e) => {
    console.log(e, "event");
    setInputText(e.target.value); //inputValueに値を書き込む（更新）
  };

    var azukeru = localStorage.getItem("azukeru");
    var uketoru = localStorage.getItem("uketoru");
    var Item1 = localStorage.getItem("Items1");
    var Item2 = localStorage.getItem("Items2");
    var Item3 = localStorage.getItem("Items3");
    var Item4 = localStorage.getItem("Items4");


    const addInputData = () => {
        if(db.collection("irai").add({
            azukeru: azukeru,
            uketoru: uketoru,
            item1: Item1,
            item2: Item2,
            item3: Item3,
            item4: Item4,
            name: inputName,
            mail: inputMail,
            phone: inputPhone,
            etc: inputText,
            status:"×",
            time: firebase.firestore.FieldValue.serverTimestamp(),
        })){

        props.history.push('/Thanks');
        }else{
            alert("エラー問い合わせてください")
        }
    };
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

    return (
    <div className="kakunin">
        <tr className="kakunin_Azukeru">
            <th>預けた場所</th>
        </tr>
        <div className="kakunin_Azukeru">        
            {azukeru}
        </div>
        <tr className="kakunin_Uketoru">
            <th>受け取り場所</th>
        </tr>
        <div className="kakunin_Uketoru">        
            {uketoru}
        </div>
        
        <div>
        <tr className="kakunin_small">
            <td>
            <img src={ImgPath_small}/>
            </td>
            <td className="kakunin_Item">{Item1}個
            </td>
        </tr>
        <tr className="kakunin_middle">
            <td>
            <img src={ImgPath_middle}/>
            </td>
            <td className="kakunin_Item">
                {Item2}個
            </td>
        </tr>
        <tr  className="kakunin_large">
            <td>
            <img src={ImgPath_large}/>
            </td>
            <td className="kakunin_Item">
                {Item3}個
            </td>
        </tr>
        <tr  className="kakunin_sonota">
            <td>
            <img src={ImgPath_sonota}/>
            </td>
            <td className="kakunin_Item">
                {Item4}個
            </td>
        </tr>
        </div>



        <tr className="kakunin_Name">
            <td>名前</td>
            <td><input className="Name"
              type="text"
              value={inputName}
              onChange={handleInputChangeName}
            /></td>
        </tr>
        <tr className="kakunin_Mail">
            <td>メールアドレス</td>
            <td><input className="Mail"
              type="text"
              value={inputMail}
              onChange={handleInputChangeMail}
            /></td>
        </tr>
        <tr className="kakunin_Phone">
            <td>電話番号</td>
            <td><input className="Phone"
              type="int"
              length="11"
              value={inputPhone}
              onChange={handleInputChangePhone}
            /></td>
        </tr>
        <tr className="kakunin_Text">
            <td>その他/希望など</td>
            <td>
                <textarea className="Text"
                value={inputText}
                onChange={handleInputChangeText}
            />
            </td>
        </tr>

        <div className="next_button">
        <button disabled={inputName==""||inputMail==""||inputPhone==""} onClick={addInputData}>
            
                配送を依頼する
            
        </button>
        </div>
        
        <div className="next_button">

        <button>
           <a href="/Data">
            データ確認
            </a>
        </button>
        
        </div>
    </div>
    )
}

export default Kakunin
