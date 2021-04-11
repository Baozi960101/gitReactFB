import React from "react";
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

export default () => {
  return (
    <div className="leftBox">
      <div className="leftTitle">
        <Head />
        許仕翰
      </div>
      <div className="leftTitle">
        <img src={Facemask} />
        新冠病毒資訊中心
      </div>
      <div className="leftTitle">
        <img src={Friend} />
        朋友
      </div>
      <div className="leftTitle">
        <img src={Activity} />
        最新動態
      </div>
      <div className="leftTitle">
        <img src={Star} />
        最愛
      </div>
      <div className="leftTitle">
        <img src={Societies} />
        社團
      </div>
      <div className="leftTitle">
        <img src={Store} />
        Merketplace
      </div>
      <div className="leftTitle">
        <img src={WatchingTv} />
        Watch
      </div>
      <div className="leftTitle">
        <img src={Dynamic} />
        活動
      </div>
      <div className="leftTitle">
        <div className="leftTitleButtom">
          <img src={ArrowDown} />
        </div>
        顯示更多
      </div>
      <div className="headsubtitle">你的捷徑</div>
    </div>
  );
};
