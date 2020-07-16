import React from "react";
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

function Footer() {
  const [value, setValue] = useState("");

  return (
    <FooterContainer>
      <FooterWrapper>
        <TextInput
          name="chatEntry"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetch("/bruh", {
                method: "POST",
              });
            }
          }}
        />
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
