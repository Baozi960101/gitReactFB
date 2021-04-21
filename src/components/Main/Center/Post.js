import React, { useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import "./index.css";
import Head from "./HeadLogo";
import Like from "./images/like.svg";
import Chat from "./images/chat.svg";
import Share from "./images/share.svg";
import Likecircle from "./images/likeCircle.svg";
import More from "./images/more.svg";
import World from "./images/world.svg";
import gameIndex from "./images/game_Index.png";

const Post = () => {
  const [message, setMessage] = useState(false);
  const [like, setLike] = useState(9999);
  const [newMessage, setNewMessage] = useState("");

  const [msgList, setMsgList] = useState([]);

  function addLike() {
    setLike(like + 1);
  }

  function addMessage() {
    setMessage(true);
  }

  function addNewMessage(e) {
    setNewMessage(e.target.value);
  }

  function addnewMessageText() {
    setMsgList(function (prev) {
      // prev  =  [  "1111", "2222", "3333", '4444'  ]
      return [...prev, newMessage];
    });
    setNewMessage("");
  }

  return (
    <>
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
        <div className="centerMainText">
          遊戲目錄
          <div className="wellText">#第一個作品 #JaveScript</div>
        </div>

        <SRLWrapper>
          <div className="centerMainImg">
            <img src={gameIndex} />
          </div>
        </SRLWrapper>
        <div className="centerMainlike">
          <img src={Likecircle} />
          <div className="likeText">{like}</div>
        </div>
        <div className="centerMainBottom">
          <div className="centerMainButton" onClick={addLike}>
            <img src={Like} />
            讚
          </div>
          <div className="centerMainButton" onClick={addMessage}>
            <img src={Chat} />
            留言
          </div>
          <a  
              className="centerMainButton"
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/許仕翰.ceng1/"
              target="_blank"
              rel="noopener noreferrer"
            >
          
            <img src={Share} />
            分享
          
          </a>
        </div>

        <div
          className={message === true ? "centerMainBottom" : "none"}
          id="comment"
        >
          <div className="centerPO">
            <Head />
            <input
              placeholder="留言..."
              type="Text"
              value={newMessage}
              className="centerMessage"
              onChange={addNewMessage}
            ></input>
            <button className="centerMessageButton" onClick={addnewMessageText}>
              發送
            </button>
          </div>
        </div>

        {msgList.map(function (data) {
          return (
            <div className="centerPOMessager">
              <Head />
              <div className="centerMessageText">{data}</div>
            </div>
          );
        })}
      </div>
      <div className="centerMainAllBoxBottom"></div>
    </>
  );
};

export default Post;
