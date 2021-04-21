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
import UserRwd from "./images/userRwd.svg";
import CameraRwd from "./images/cameraRwd.svg";
import Friends from "./images/friends.svg";
import Menu from "./images/menu.svg";
import Dynamic from "./images/dynamic.svg";

export default () => {
  return (
    <div>
      <div className="RWD">
        <div className="headBoxRWD">
          <div className="headBoxRWDImg">
            <img src={UserRwd} />
          </div>
          <div className="headBoxRWDText">
            <img src={Search} />
            搜尋
          </div>
          <div className="headBoxRWDImg">
            <img src={CameraRwd} />
          </div>
        </div>
        <div className="headBoxRWDBottom">
          <div className="headBoxRWDBottomImg">
            <img src={Dynamic} />
          </div>
          <div className="headBoxRWDBottomImg">
            <img src={Friends} />
          </div>
          <div className="headBoxRWDBottomImg">
            <img src={Messenger} />
          </div>
          <div className="headBoxRWDBottomImg">
            <img src={Tv} />
          </div>
          <div className="headBoxRWDBottomImg">
            <img src={Bell} />
          </div>
          <div className="headBoxRWDBottomImg">
            <img src={Menu} />
          </div>
        </div>
      </div>

      <div className="headBox">
        <div className="headLeft">
          <div className="fbBox">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} />
            </a>
          </div>
          <div className="searchLogo">
            <img src={Search} />
          </div>
          <input value="" className="search" />
        </div>

        <div className="HeadCenterBox">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="headCenter headerBorder">
              <div className="headCenterhover" title="首頁">
                <div className="headCenterImg">
                  <img src={Home} />
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="headCenter">
              <div className="headCenterhover" title="Watch">
                <div className="headCenterImg">
                  <img src={Tv} />
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="headCenter">
              <div className="headCenterhover" title="Marketplace">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="headCenterImg">
                    <img src={Shopping} />
                  </div>
                </a>
              </div>
            </div>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="headCenter">
              <div className="headCenterhover" title="社團">
                <div className="headCenterImg">
                  <img src={User} />
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="headCenter">
              <div className="headCenterhover" title="遊戲">
                <div className="headCenterImg">
                  <img src={Puzzle} />
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="headRight">
          <div className="headPersonalBox">
            <Head />
            <div className="headPersonalText">許仕翰</div>
          </div>
          <div className="headRightLogo" title="建立">
            <img src={Plus} />
          </div>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="headRightLogo" title="Messenger">
              <img src={Messenger} />
            </div>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="headRightLogo" title="通知">
              <img src={Bell} />
            </div>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="headRightLogo" title="帳號">
              <img src={Down} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
