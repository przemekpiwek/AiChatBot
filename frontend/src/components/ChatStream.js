import React from "react";
import ChatMessage from "./ChatMessage";

import "./ChatStream.css";

function ChatStream(props) {
  return (
    <section className="chat-stream">
      {props.messageArray.map((msg) => {
        return (
          <>
            <ChatMessage message={msg.user} messageType="sent" />
            <ChatMessage message={msg.daniel} messageType="received" />
          </>
        );
      })}
    </section>
  );
}

export default ChatStream;
