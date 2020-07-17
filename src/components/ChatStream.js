import React from "react";
import ChatMessage from "./ChatMessage";
import styled from "styled-components";

const ChatSection = styled.section`
  flex: 1;
  margin: 5vh 2vw;
`;

function ChatStream({ messages }) {
  console.log(messages);
  return (
    <ChatSection>
      {messages.map((msg) => {
        return (
          <>
            <ChatMessage messageType="sent" message={msg.user} />
            <ChatMessage messageType="received" message={msg.daniel} />
          </>
        );
      })}
    </ChatSection>
  );
}

export default ChatStream;
