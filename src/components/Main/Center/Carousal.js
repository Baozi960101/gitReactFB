// import Swiper core and required modules
import { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import Avator from './images/head.jpg'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const transitionStyles = {
  entering: { transform: 'scale(1)', transition: 'transform .5s' },
  entered:  { transform: 'scale(1.1)', transition: 'transform .5s' },
  exiting:  { transform: 'scale(1.1)', transition: 'transform .5s' },
  exited:  { transform: 'scale(1)', transition: 'transform .5s' },
};

// const a = {name: 'mike'}
// const b = {age: 30}
// const c = { ...a, ...b }
// c { name: 'mike', age: 30 }

// 子元件
const Item = () => {

  const [ mouseIn, setMouseIn ] = useState(false)

  function mouseEnter() {
    setMouseIn(true)
  }

  function mouseLeave() {
    setMouseIn(false)
  }

  return <div className="centerCarousalItemWrapper" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
    { mouseIn && <div className="centerCarousalItemMask"></div>}
    <Transition in={mouseIn}>
      {state => (
        <img style={transitionStyles[state]} src={Avator} />
      )}
    </Transition>
  </div>;
};

const Carousal = () => {

  const [slidesPerView, setSlidesPerView] = useState(4)

  useEffect(() => {
    if (window.innerWidth <= 414) {
      setSlidesPerView(3)
    }
  }, [])

  return (
    <div className="centerCarousal">
      <Swiper
      spaceBetween={10}
      slidesPerView={slidesPerView}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Item />
      </SwiperSlide>
      <SwiperSlide>
        <Item />
      </SwiperSlide>
      <SwiperSlide>
        <Item />
      </SwiperSlide>
      <SwiperSlide>
        <Item />
      </SwiperSlide>
      <SwiperSlide>
        <Item />
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Carousal;
