import React, { useState } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  backdrop-filter: blur(40px);
  background-color: rgba(255, 255, 255, 0.4);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const FooterWrapper = styled.div`
  display: flex;
  height: 8vh;
  justify-content: center;
  padding: 10px;
`;

const TextInput = styled.input`
  width: 90%;
  border-radius: 10px;
  border: 1px solid rgb(170, 169, 169);

  &:focus {
    outline: 0px;
    border: 2px solid grey;
  }
`;

function Footer(props) {
  const [value, setValue] = useState("");

  return (
    <FooterContainer>
      <FooterWrapper>
        <TextInput
          value={value}
          onChange={(e) => {
            console.log("working");
            setValue(e.target.value);
          }}
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              const response = await fetch("http://localhost:4000/", {
                //`${window.origin}/api`
                method: "POST",
                body: JSON.stringify({
                  value: value,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              });
              const json = await response.json();
              console.log(json);
              props.setMessages((prevMessages) => prevMessages.push(json));
            }
          }}
        />
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
