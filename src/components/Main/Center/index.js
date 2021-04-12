import React from "react";
import "./index.css";
import Head from "./HeadLogo";
import Rightarrow from "./images/rightarrow.svg";
import VideoCamera from "./images/videoCamera.svg";
import Photo from "./images/photo.svg";
import Feel from "./images/feel.svg";

export default () => {
  return (
    <div className="centerMainBox">
      <div className="centerBox">
        <div className="centerDynamic">
          <div className="centerDynamicBox"></div>
          <div className="centerDynamicBox"></div>
          <div className="centerDynamicBox"></div>
          <div className="centerDynamicBox"></div>
          <div className="centerDynamicBox"></div>
          <div className="centerDynamicBox"></div>
          <div className="centerDynamicArrow" title="查看所有現實動態">
            <img src={Rightarrow} />
          </div>
        </div>
        <div className="centerPersonal">
          <div className="centerPO">
            <Head />
            <div className="centerPOText">在想些甚麼 ?</div>
          </div>
          <div className="centerPOBottom">
            <div className="centerPOButton">
              <img src={VideoCamera} />
              直播視訊
            </div>
            <div className="centerPOButton">
              <img src={Photo} />
              相片 / 影片
            </div>
            <div className="centerPOButton">
              <img src={Feel} />
              感受 / 活動
            </div>
          </div>
        </div>
        <div className="centerVideo">
          <div className="centerVideoButton">
            <img src={VideoCamera} />
            建立包廂
          </div>
        </div>
        <div>
          <div className="centerMainTitle">4</div>
        </div>
      </div>
    </div>
  );
};
