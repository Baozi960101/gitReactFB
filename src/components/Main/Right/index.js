import React, { useState } from "react";
import "./index.css";
import Head from "./HeadLogo";
import Plus from "./images/plus.svg";
import Edit from "./images/edit.svg";
import VideoCamera from "./images/videoCamera.svg";
import Search from "./images/search.svg";
import More from "./images/more.svg";
import Close from "./images/close.svg";
import Telephone from "./images/telephone.png";

export default () => {
  const [addEdit, setAddEdit] = useState(false);

  function addEditDiv() {
    if (addEdit === false) {
      setAddEdit(true);
    } else {
      setAddEdit(false);
    }
  }

  return (
    <div className="rightBox">
      <div className="advertising">
        <div className="advertisingTitle">贊助</div>
        <div className="advertisingMain">廣告欄</div>
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
      <div className="contacts">群組對話</div>
      <div className="rightTitle">
        <div className="rightTitleButtom">
          <img src={Plus} />
        </div>
        建立新群組
      </div>
      <div className="edit" onClick={addEditDiv}>
        <img src={Edit} />
      </div>
      <div className={addEdit === true ? "editDiv" : "none"}>
        <div className="editDivTitle">
          <div>新訊息 ! ! !</div>
          <img src={Close} onClick={addEditDiv} />
        </div>
        <div className="editDivTitle editDivTitleButtom">致:</div>
        <div className="editDivTitleTwo">
          <div className="editDivTitleTwoText">建議</div>
        </div>
      </div>
    </div>
  );
};
