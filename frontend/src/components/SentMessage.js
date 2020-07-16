import React from "react";
import "./ChatMessage.css";

const SentMessage = (props) => {
  return (
    <div className="sent-wrapper">
      <div className="sent-message">{props.message}</div>
      <img className="sentTick" src="/assets/tip-sent.svg" />
    </div>
  );
};

export default SentMessage;
