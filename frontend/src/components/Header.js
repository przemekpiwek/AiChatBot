import React from "react";
import "./Header.css";
const danielSrc = "/assets/danielSrc.png";

function Header() {
  return (
    <header>
      <div className="participant-wrapper">
        <img src={danielSrc} className="participant-image" />
        <h1 className="participant-name">Daniel Plainview</h1>
      </div>
    </header>
  );
}

export default Header;
