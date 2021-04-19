import React, { useState } from "react";

import "./index.css";
import Head from "./HeadLogo";
import Facemask from "./images/facemask.svg";
import Activity from "./images/activity.svg";
import Dynamic from "./images/dynamic.svg";
import ArrowDown from "./images/arrowDown.svg";
import ArrowUp from "./images/arrowUp.svg";
import Friend from "./images/friend.svg";
import Societies from "./images/societies.svg";
import Star from "./images/star.svg";
import Store from "./images/store.svg";
import WatchingTv from "./images/watchingTv.svg";
import Messenger from "./images/messenger.svg";
import Puzzle from "./images/puzzle.svg";
import Cloudy from "./images/cloudy.png";
import Job from "./images/job.png";
import Live from "./images/live.png";
import Sale from "./images/sale.png";
import Pay from "./images/pay.png";

export default () => {
  const [color, setColor] = useState(false);
  const [more, setMore] = useState(false);
  const [text, setText] = useState("顯示更多");

  function Change() {
    setColor(true);
  }
  function ChangeOut() {
    setColor(false);
  }

  function addMore() {
    if (more === false) {
      setMore(true);
      setText("顯示更少");
    } else {
      setMore(false);
      setText("顯示更多");
    }
  }

  return (
    <div className="leftBox">
      <div className="leftTitle">
        <Head />
        許仕翰
      </div>
      <a href="https://www.facebook.com/" target="_blank" className="leftTitle">
        <img src={Facemask} />
        新冠病毒資訊中心
      </a>
      <a href="https://www.facebook.com/" target="_blank" className="leftTitle">
        <img src={Friend} />
        朋友
      </a>
      <a href="https://www.facebook.com/" target="_blank" className="leftTitle">
        <img src={Activity} />
        最新動態
      </a>
      <a href="https://www.facebook.com/" target="_blank" className="leftTitle">
        <img src={Star} />
        最愛
      </a>
      <a href="https://www.facebook.com/" target="_blank" className="leftTitle">
        <img src={Societies} />
        社團
      </a>
      <a href="https://www.facebook.com/" target="_blank" className="leftTitle">
        <img src={Store} />
        Merketplace
      </a>
      <a href="https://www.facebook.com/" target="_blank" className="leftTitle">
        <img src={WatchingTv} />
        Watch
      </a>
      <a href="https://www.facebook.com/" target="_blank" className="leftTitle">
        <img src={Dynamic} />
        活動
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        className={more === true ? "leftTitle" : "none"}
      >
        <img src={Messenger} />
        訊息
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        className={more === true ? "leftTitle" : "none"}
      >
        <img src={Cloudy} />
        天氣
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        className={more === true ? "leftTitle" : "none"}
      >
        <img src={Pay} />
        Facebook Pay
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        className={more === true ? "leftTitle" : "none"}
      >
        <img src={Sale} />
        折扣
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        className={more === true ? "leftTitle" : "none"}
      >
        <img src={Puzzle} />
        遊戲
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        className={more === true ? "leftTitle" : "none"}
      >
        <img src={Job} />
        工作機會
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        className={more === true ? "leftTitle" : "none"}
      >
        <img src={Live} />
        直播視訊
      </a>
      <div
        onClick={addMore}
        onMouseOver={Change}
        onMouseOut={ChangeOut}
        className={color === true ? "leftTitle changeColor1" : "leftTitle"}
      >
        <div
          className={
            color === true ? "leftTitleButtom changeColor2" : "leftTitleButtom"
          }
        >
          <img src={more === true ? ArrowUp : ArrowDown} />
        </div>
        {text}
      </div>
      <div className="headsubtitle">你的捷徑</div>
    </div>
  );
};
