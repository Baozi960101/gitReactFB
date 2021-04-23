import React, { useState } from "react";
import "./index.css";
import Head from "./HeadLogo";
import Plus from "./images/plus.svg";
import Edit from "./images/edit.svg";
import VideoCamera from "./images/videoCamera.svg";
import Search from "./images/search.svg";
import More from "./images/more.svg";
import Close from "./images/close.svg";
import Email from "./images/email.svg";
import Telephone from "./images/telephone.png";

export default ({ addEdit, setAddEdit }) => {
  const [color, setColor] = useState(false);

  function addEditDiv() {
    if (addEdit === false) {
      setAddEdit(true);
    } else {
      setAddEdit(false);
    }
  }

  function Change() {
    setColor(true);
  }
  function ChangeOut() {
    setColor(false);
  }

  return (
    <div className="rightBox">
      <div className="advertising">
        <div className="advertisingTitle">贊助</div>
        <div className="advertisingMain"></div>
      </div>
      <div className="contacts">
        <div className="contactsText">contacts</div>
        <div className="contactsImg">
          <img src={VideoCamera} />
        </div>
        <div className="contactsImg">
          <img src={Search} />
        </div>
        <div className="contactsImg">
          <img src={More} />
        </div>
      </div>
      <div className="rightTitle">
        <Head />
        許仕翰
        <div className="online"></div>
      </div>
      {/* mailto: abc@example.com */}
      <a href="tel:0978026876" className="rightTitle">
        <img src={Telephone} />
        0978026876
        <div className="online"></div>
      </a>
      <a href="mailto:Baozi960101@gmail.com" className="rightTitle">
        <img src={Email} />
        Baozi960101@gmail.com
        <div className="online"></div>
      </a>
      <div className="contacts">群組對話</div>
      <div
        onClick={addEditDiv}
        onMouseOver={Change}
        onMouseOut={ChangeOut}
        className={color === true ? "rightTitle changeColor1" : "rightTitle"}
      >
        <div
          className={
            color === true
              ? "rightTitleButtom changeColor2"
              : "rightTitleButtom"
          }
        >
          <img src={Plus} />
        </div>
        建立新群組
      </div>
      <div className="edit" onClick={addEditDiv}>
        <img src={Edit} />
      </div>
      <div className={addEdit === true ? "editDiv" : "none"}>
        <div className="editDivTitle">
          <div>簡述該網站</div>
          <img src={Close} onClick={addEditDiv} />
        </div>
        <div className="editDivTitle editDivTitleButtom">致 : 面試官</div>
        <div className="editDivTitleTwo">
          <div className="editDivTitleTwoText">內容</div>
        </div>
        <div className="editDivTitleText">
          還在學習階段，試做出Facebook的介面，用來放置自己作品，使自己所學到的技術呈現出來。
        </div>
      </div>
    </div>
  );
};
