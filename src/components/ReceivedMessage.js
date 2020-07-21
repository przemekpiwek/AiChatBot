import React from "react";
import "./ChatMessage.css";
import ReceivedTick from "../../public/assets/tip-received.svg";

const ReceivedMessage = (props) => {
  return (
    <div>
      <div className="message-wrapper">
        <div className="image-container">
          <img className="chat-image" src={props.avatar} alt="" />
        </div>
        <img className="receivedTick" src={ReceivedTick} alt="" />
        <div>
          <span className="chat-name">{props.user}</span>
          <div className="chat-message">{props.message}</div>
        </div>
      </div>
    </div>
  );
};

export default ReceivedMessage;
