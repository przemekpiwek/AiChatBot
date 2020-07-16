import React, { useState, useEffect } from "react";
import Header from "./Header";
import ChatStream from "./ChatStream";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch("/bruh")
      .then((res) => res.json())
      .then((object) => {
        setData(object);
      });
  });
  return (
    <div className="wrapper">
      <Header />
      <ChatStream messageArray={data.messages} />
      <Footer />
    </div>
  );
}

export default App;
