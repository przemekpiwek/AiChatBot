import React, { useState } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  backdrop-filter: blur(40px);
  background-color: rgba(255, 255, 255, 0.4);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  margin-top: 50px;
`;

const FooterWrapper = styled.div`
  display: flex;
  height: 8vh;
  justify-content: center;
  padding: 10px;
  margin-bottom: 10px;
`;

const TextInput = styled.input`
  width: 80%;
  border-radius: 50px;
  border: 1px solid rgb(170, 169, 169);
  text-align: left;
  padding: 20px;

  &:focus {
    outline: 0px;
    border: 2px solid grey;
  }
`;

function Footer({ messages, setMessages }) {
  const [value, setValue] = useState("");
  return (
    <FooterContainer>
      <FooterWrapper>
        <TextInput
          placeholder="iMessage"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              const response = await fetch("/api", {
                //`${window.origin}/api`
                method: "POST",
                mode: "cors",
                body: JSON.stringify({
                  value: value,
                }),
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                },
              });
              const json = await response.json();
              let newMessageArray = [...messages];
              newMessageArray.push(json);
              setMessages(newMessageArray);
              setValue("");
            }
          }}
        />
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
