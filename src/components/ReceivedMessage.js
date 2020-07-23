import React from "react";
import "./ChatMessage.css";

import ReceivedTick from "./tip-received.svg";
import danielSrc from "./danielSrc.png";

const ReceivedMessage = ({ user, message }) => {
  return (
    <div>
      <div className="message-wrapper">
        <div className="image-container">
          <img className="chat-image" alt="" src={danielSrc} />
        </div>
        <img className="receivedTick" alt="" src={ReceivedTick} />
        <div>
          <span className="chat-name">{user}</span>
          <div className="chat-message">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default ReceivedMessage;
