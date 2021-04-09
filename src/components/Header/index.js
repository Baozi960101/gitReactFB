import React from "react";
import "./index.css";
import Tv from "./images/tv.svg"
import User from "./images/user.svg"
import Shopping from "./images/shopping.svg"
import Puzzle from "./images/puzzle.svg"
import Home from "./images/home.svg"



export default () => {
  return <div className="headBox">
      <div className="headLeft">4</div>

      <div className="HeadCenterBox">
      <div className="headCenter headerBorder">
        <div className="headCenterhover" title="首頁">
        <div className="headCenterImg">
              <img src={Home}/>
              </div> 
        </div>
      </div>
      <div className="headCenter">
          <div className="headCenterhover" title="Watch">
              <div className="headCenterImg">
              <img src={Tv}/>
              </div> 
          </div>
      </div>
      <div className="headCenter">
      <div className="headCenterhover" title="Marketplace">
      <div className="headCenterImg">
              <img src={Shopping}/>
              </div> 
      </div>
      </div>
      <div className="headCenter">
      <div className="headCenterhover" title="社團">
      <div className="headCenterImg">
              <img src={User}/>
              </div> 
      </div>
      </div>
      <div className="headCenter">
      <div className="headCenterhover" title="遊戲">
      <div className="headCenterImg">
              <img src={Puzzle}/>
              </div> 
      </div>
      </div>
        </div>  
      

      <div className="headRight">4</div>           
  </div>;
};
