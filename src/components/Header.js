import React from "react";
import styled from "styled-components";
import danielSrc from "./danielSrc.png";

const HeaderContainer = styled.header`
  height: 100px;
  background-color: #f9f9f9;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15),
    0px 1px 0.5px rgba(0, 0, 0, 0.075);
  display: flex;
  justify-content: center;
`;
const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100px;
  margin: 10px;
`;
const AvatarImage = styled.img`
  display: block;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: 10px 0;
`;
const AvatarName = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 0.8em;
  margin-top: 0;
`;

function Header() {
  return (
    <HeaderContainer>
      <AvatarWrapper>
        <AvatarImage src={danielSrc} />
        <AvatarName>Daniel</AvatarName>
      </AvatarWrapper>
    </HeaderContainer>
  );
}

export default Header;
