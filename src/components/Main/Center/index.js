import React, { useState, useEffect } from "react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Transition } from "react-transition-group";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import "./index.css";
import Head from "./HeadLogo";
import VideoCamera from "./images/videoCamera.svg";
import Photo from "./images/photo.svg";
import Feel from "./images/feel.svg";
import GameIndexTime from "./images/game_Indextime.png";
import CalculatorTime from "./images/calculatortime.png";
import HighspeedTime from "./images/highspeedtime.png";
import OoxxTime from "./images/ooxxtime.png";
import StopwatchTime from "./images/stopwatchtime.png";
import GameIndexPO from "./images/game_Index.png";
import Calculator from "./images/calculator.png";
import Highspeed from "./images/highspeed.png";
import Ooxx from "./images/ooxx.png";
import Stopwatch from "./images/stopwatch.png";

import Post from "./Post";

const Item = ({ imgSrc }) => {
  const transitionStyles = {
    entering: { transform: "scale(1)", transition: "transform .5s" },
    entered: { transform: "scale(1.1)", transition: "transform .5s" },
    exiting: { transform: "scale(1.1)", transition: "transform .5s" },
    exited: { transform: "scale(1)", transition: "transform .5s" },
  };

  const [Newmask, setNewmask] = useState(false);

  function addmask() {
    setNewmask(true);
  }

  function addmaskOut() {
    setNewmask(false);
  }

  return (
    <a
      onMouseOver={addmask}
      onMouseOut={addmaskOut}
      className="centerDynamicBox"
    >
      <div className={Newmask === true ? "mask" : "none"}></div>
      <Transition in={Newmask}>
        {(state) => <img style={transitionStyles[state]} src={imgSrc} />}
      </Transition>
    </a>
  );
};

const postArr = [
  {
    poImg: GameIndexPO,
    poText: "遊戲目錄",
    mark: "#第一個作品 #JaveScript #RWD",
  },
  {
    poImg: Ooxx,
    poText: "井字遊戲",
    mark: "#第二個作品 #JaveScript運用",
  },
  {
    poImg: Stopwatch,
    poText: "計時器",
    mark: "#第三個作品 #JaveScript運用",
  },
  {
    poImg: Calculator,
    poText: "簡易計算機",
    mark: "#第四個作品 #JaveScript運用",
  },
  {
    poImg: Highspeed,
    poText: "高鐵時刻查詢系統",
    mark: "#第五個作品 #JaveScript #API #React #RWD",
  },
];

const postRwd = [
  { imgSrc: GameIndexTime },
  { imgSrc: CalculatorTime },
  { imgSrc: OoxxTime },
  { imgSrc: StopwatchTime },
  { imgSrc: HighspeedTime },
];

export default () => {
  const [displayWidth, setDisplayWidth] = useState(4);

  useEffect(() => {
    if (window.innerWidth <= 414) {
      setDisplayWidth(3);
    }
  }, []);

  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  return (
    <div className="centerMainBox">
      <div className="centerBox">
        <div className="centerPORWD">
          <Head />
          <div placeholder="在想些甚麼 ?" className="centerPOTextRWD"></div>
          <div className="centerPOTextRWDImg">
            <img src={Photo} />
            相片
          </div>
        </div>

        <div className="centerDynamic">
          <Swiper
            spaceBetween={10}
            slidesPerView={displayWidth}
            // navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {postRwd.map((data) => {
              return (
                <SwiperSlide>
                  <Item imgSrc={data.imgSrc} />
                </SwiperSlide>
              );
            })}
          </Swiper>
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

        {postArr.map(function (item) {
          return (
            <div>
              <Post poImg={item.poImg} poText={item.poText} mark={item.mark} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
