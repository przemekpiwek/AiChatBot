import React from "react";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

const ChatMessage = ({ messageType, message }) => {
  if (messageType === "received") {
    return <ReceivedMessage message={message} user="Daniel" />;
  } else {
    return <SentMessage message={message} />;
  }
};

export default ChatMessage;
