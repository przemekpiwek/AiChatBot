import React, { useState } from "react";
import Header from "./Header";
import ChatStream from "./ChatStream";
import Footer from "./Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [messages, setMessages] = useState([]);
  console.log(messages);
  return (
    <Wrapper>
      <Header />
      <ChatStream messages={messages} />
      <Footer messages={messages} setMessages={setMessages} />
    </Wrapper>
  );
}

export default App;
