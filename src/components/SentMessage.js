import React from "react";
import "./ChatMessage.css";

import SentTick from "../../public/assets/tip-sent.svg";

const SentMessage = (props) => {
  return (
    <div className="sent-wrapper">
      <div className="sent-message">{props.message}</div>
      <img className="sentTick" src={SentTick} alt="" />
    </div>
  );
};

export default SentMessage;
