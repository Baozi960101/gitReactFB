import React from "react";
import "./index.css";
import Head from "./HeadLogo";
import Rightarrow from "./images/rightarrow.svg";
import VideoCamera from "./images/videoCamera.svg";
import Photo from "./images/photo.svg";
import Feel from "./images/feel.svg";
import Like from "./images/like.svg";
import Chat from "./images/chat.svg";
import Share from "./images/share.svg";
import Likecircle from "./images/likeCircle.svg";
import More from "./images/more.svg";
import World from "./images/world.svg";

export default () => {
  return (
    <div className="centerMainBox">
      <div className="centerBox">
        <div className="centerPORWD">
          <Head />
          <div className="centerPOTextRWD">在想些甚麼 ?</div>
          <div className="centerPOTextRWDImg">
            <img src={Photo} />
            相片
          </div>
        </div>
        <div className="centerDynamicText">
          <div className="centerDynamicTextLift">限時動態</div>
          <div className="centerDynamicTextRight">你的典藏</div>
        </div>
        <div className="centerDynamic">
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
        <div className="centerMainAllBox">
          <div className="centerMainTitle">
            <div>
              <Head />
            </div>
            <div className="centerMainTitleText">
              <div className="centerMainTitleTextUp">許仕翰</div>
              <div className="centerMainTitleTextBottom">
                1分鐘。
                <img src={World} />
              </div>
            </div>
            <div className="centerMainTitleButton">
              <img src={More} />
            </div>
          </div>
          <div className="centerMainText">4</div>
          <div className="centerMainImg">放圖</div>
          <div className="centerMainlike">
            <img src={Likecircle} />
          </div>
          <div className="centerMainBottom">
            <div className="centerMainButton">
              <img src={Like} />讚
            </div>
            <div className="centerMainButton">
              <img src={Chat} />
              留言
            </div>
            <div className="centerMainButton">
              <img src={Share} />
              分享
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
