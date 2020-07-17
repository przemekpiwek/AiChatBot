import React from "react";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

const danielSrc = "/assets/danielSrc.png";

const ChatMessage = (props) => {
  if (props.messageType === "received") {
    return (
      <ReceivedMessage
        message={props.message}
        user="daniel"
        avatar={danielSrc}
      />
    );
  } else {
    return <SentMessage message={props.message} />;
  }
};

export default ChatMessage;
