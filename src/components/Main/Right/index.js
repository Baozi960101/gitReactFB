import React from "react";
import "./index.css";
import Head from "./HeadLogo";
import Plus from "./images/plus.svg";
import Edit from "./images/edit.svg";
import VideoCamera from "./images/videoCamera.svg";
import Search from "./images/search.svg";
import More from "./images/more.svg";

export default () => {
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
      <div className="rightTitle">
        <Head />
        許仕翰
        <div className="online"></div>
      </div>
      <div className="rightTitle">
        <Head />
        許仕翰
        <div className="online"></div>
      </div>
      <div className="rightTitle">
        <Head />
        許仕翰
        <div className="online"></div>
      </div>
      <div className="rightTitle">
        <Head />
        許仕翰
        <div className="online"></div>
      </div>
      <div className="rightTitle">
        <Head />
        許仕翰
        <div className="online"></div>
      </div>
      <div className="rightTitle">
        <Head />
        許仕翰
        <div className="online"></div>
      </div>
      <div className="rightTitle">
        <Head />
        許仕翰
        <div className="online"></div>
      </div>
      <div className="rightTitle">
        <Head />
        許仕翰
        <div className="online"></div>
      </div>
      <div className="rightTitle">
        <Head />
        許仕翰
        <div className="online"></div>
      </div>
      <div className="rightTitle">
        <Head />
        許仕翰
        <div className="online"></div>
      </div>
      <div className="rightTitle">
        <Head />
        許仕翰
        <div className="online"></div>
      </div>
      <div className="rightTitle">
        <Head />
        許仕翰
        <div className="online"></div>
      </div>
      <div className="rightTitle">
        <Head />
        許仕翰
        <div className="online"></div>
      </div>
      <div className="contacts">群組對話</div>
      <div className="rightTitle">
        <div className="rightTitleButtom">
          <img src={Plus} />
        </div>
        建立新群組
      </div>
      <div className="edit">
        <img src={Edit} />
      </div>
    </div>
  );
};
