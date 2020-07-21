import React from "react";
import styled from "styled-components";
import { useState } from "react";

import "./Modal.css";

function Modal() {
  const [isShown, SetisShown] = useState(true);
  const displayClassName = isShown ? "display" : "display-none";

  return (
    <ModalWrapper className={displayClassName}>
      <ModalContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2em",
          }}
        >
          <h2 style={{ margin: "0" }}>Welcome</h2>
          <h4 style={{ textAlign: "center", fontStyle: "italic" }}>
            To sent Daniel a message,
            <br /> press "enter" on your keyboard.
          </h4>
        </div>
        <Button
          onClick={() => {
            if (isShown === true) {
              SetisShown(false);
            } else {
              SetisShown(false);
            }
          }}
        >
          Sounds Good.
        </Button>
      </ModalContainer>
    </ModalWrapper>
  );
}

const ModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  min-width: 40vw;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid grey;
  border-radius: 10px;
  transform: translate(-50%, -50%);
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

const Button = styled.button`
  width: 90%;
  border: 0px;
  background: #1185f7;
  border-radius: 10px;
  color: white;
  font-size: 1.2em;
  padding: 20px 10px;

  &:hover {
    background: #1145f7;
  }
`;

export default Modal;
