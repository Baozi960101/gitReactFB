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

// import GameIndexTime from "./images/game_Indextime.png";
// import CalculatorTime from "./images/calculatortime.png";
// import HighspeedTime from "./images/highspeedtime.png";
// import OoxxTime from "./images/ooxxtime.png";

import StopwatchTime from "./images/works/stopwatch.png";
import GameIndexPO from "./images/works/game.png";
import Calculator from "./images/works/calculator.png";
import Highspeed from "./images/works/highspeed.png";
import OOXX from "./images/works/ooxx.png";
import fb from "./images/works/fb.png";

import { parsingURL } from "../../../utils/url";

import Post from "./Post";

const Item = ({ imgSrc, id }) => {
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
      href={parsingURL(id)}
      // style={{ backgroundImage: `url(${imgSrc})`, filter: 'grayscale(50%)'}}
    >
      <div className={Newmask === true ? "mask" : "none"}></div>
      <Transition in={Newmask}>
        {(state) => <img style={transitionStyles[state]} src={imgSrc} />}
      </Transition>
    </a>
  );
};

const works = [
  {
    id: 1,
    image: fb,
    title: "???Facebook",
    desc: "#??????????????? #JaveScript #RWD",
  },
  {
    id: 2,
    image: GameIndexPO,
    title: "????????????",
    desc: "#??????????????? #JaveScript #RWD",
  },
  {
    id: 3,
    image: Highspeed,
    title: "????????????????????????",
    desc: "#??????????????? #JaveScript #API #React #RWD",
  },
  {
    id: 4,
    image: OOXX,
    title: "????????????",
    desc: "#??????????????? #JaveScript??????",
  },
  {
    id: 5,
    image: StopwatchTime,
    title: "?????????",
    desc: "#??????????????? #JaveScript??????",
  },
  {
    id: 6,
    image: Calculator,
    title: "???????????????",
    desc: "#??????????????? #JaveScript??????",
  },
];

export default ({ addEdit, setAddEdit }) => {
  const [displayWidth, setDisplayWidth] = useState(4);

  function addEditDiv() {
    if (addEdit === false) {
      setAddEdit(true);
    } else {
      setAddEdit(false);
    }
  }

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
          <div
            onClick={addEditDiv}
            placeholder="??????????????? ?"
            className="centerPOTextRWD"
          ></div>
          <div className="centerPOTextRWDImg">
            <img src={Photo} />
            ??????
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
            {works.map((item) => {
              return (
                <SwiperSlide>
                  <Item imgSrc={item.image} id={item.id} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="centerPersonal">
          <div className="centerPO">
            <Head />
            <div onClick={addEditDiv} className="centerPOText">
              ??????????????? ?
            </div>
          </div>
          <div className="centerPOBottom">
            <div className="centerPOButton">
              <img src={VideoCamera} />
              ????????????
            </div>
            <div className="centerPOButton">
              <img src={Photo} />
              ?????? / ??????
            </div>
            <div className="centerPOButton">
              <img src={Feel} />
              ?????? / ??????
            </div>
          </div>
        </div>

        {works.map((item) => {
          return (
            <Post
              key={item.title}
              poImg={item.image}
              poText={item.title}
              mark={item.desc}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};
