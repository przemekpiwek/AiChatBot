import React from "react";
import "./ChatMessage.css";

import SentTick from "./tip-sent.svg";

const SentMessage = (props) => {
  return (
    <div className="sent-wrapper">
      <div className="sent-message">{props.message}</div>
      <img className="sentTick" alt="" src={SentTick} />
    </div>
  );
};

export default SentMessage;
