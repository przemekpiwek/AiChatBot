import React from "react";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";
import "./ChatMessage.css";

const danielSrc = "/assets/danielSrc.png";

const ChatMessage = (props) => {
  if (props.messageType === "received") {
    return (
      <div>
        <ReceivedMessage
          message={props.message}
          user="daniel"
          avatar={danielSrc}
        />
      </div>
    );
  } else {
    return <SentMessage message={props.message} />;
  }
};

export default ChatMessage;
