import React from "react";
import "./index.css";
import Tv from "./images/tv.svg";
import User from "./images/user.svg";
import Shopping from "./images/shopping.svg";
import Puzzle from "./images/puzzle.svg";
import Home from "./images/home.svg";
import Facebook from "./images/facebook.svg";
import Search from "./images/search.svg";
import Head from "./HeadLogo";
import Down from "./images/down.svg";
import Bell from "./images/bell.svg";
import Plus from "./images/plus.svg";
import Messenger from "./images/messenger.svg";

export default () => {
  return (
    <div className="headBox">
      <div className="headLeft">
        <div className="fbBox">
          <img src={Facebook} />
        </div>
        <div className="searchLogo">
          <img src={Search} />
        </div>
        <input value="搜尋 Facebook" className="search" />
      </div>

      <div className="HeadCenterBox">
        <div className="headCenter headerBorder">
          <div className="headCenterhover" title="首頁">
            <div className="headCenterImg">
              <img src={Home} />
            </div>
          </div>
        </div>
        <div className="headCenter">
          <div className="headCenterhover" title="Watch">
            <div className="headCenterImg">
              <img src={Tv} />
            </div>
          </div>
        </div>
        <div className="headCenter">
          <div className="headCenterhover" title="Marketplace">
            <div className="headCenterImg">
              <img src={Shopping} />
            </div>
          </div>
        </div>
        <div className="headCenter">
          <div className="headCenterhover" title="社團">
            <div className="headCenterImg">
              <img src={User} />
            </div>
          </div>
        </div>
        <div className="headCenter">
          <div className="headCenterhover" title="遊戲">
            <div className="headCenterImg">
              <img src={Puzzle} />
            </div>
          </div>
        </div>
      </div>

      <div className="headRight">
        <div className="headPersonalBox">
          <Head />
          <div className="headPersonalText">許仕翰</div>
        </div>
        <div className="headRightLogo" title="建立">
          <img src={Plus} />
        </div>
        <div className="headRightLogo" title="Messenger">
          <img src={Messenger} />
        </div>
        <div className="headRightLogo" title="通知">
          <img src={Bell} />
        </div>
        <div className="headRightLogo" title="帳號">
          <img src={Down} />
        </div>
      </div>
    </div>
  );
};
