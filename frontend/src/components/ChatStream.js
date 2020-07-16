import React from "react";
import ChatMessage from "./ChatMessage";
import styled from "styled-components";

function ChatStream(props) {
  console.log(props);
  return (
    <ChatSection>
      {props.messages.map((msg) => {
        return <div>{msg}</div>;
      })}
    </ChatSection>
  );
}

export default ChatStream;

const ChatSection = styled.section`
  flex: 1;
  margin: 5vh 2vw;
`;
