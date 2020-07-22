import React from "react";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

// import danielSrc from "../public/assets/danielSrc.png";

const ChatMessage = ({ messageType, message }) => {
  if (messageType === "received") {
    return <ReceivedMessage message={message} user="daniel" />;
  } else {
    return <SentMessage message={message} />;
  }
};

export default ChatMessage;
