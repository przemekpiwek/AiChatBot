import React, { useState } from "react";
import Header from "./Header";
import ChatStream from "./ChatStream";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="wrapper">
      <Header />
      <ChatStream messages={messages} />
      <Footer setMessages={setMessages} />
    </div>
  );
}

export default App;

//app is container, footer is inside of app, inside of app there is a state that manages all the messages(const [messages, setMessages] = useState([]))
//Footer is the only component that can change the messages in App. So we need to pass a setMessages function and we need to pass that into footer (<Footer setMessages = {setMessages} />)
//Now we only need to pass the State into ChatStream components (Messages)
//That is all we need to do for App.

//Footer: We have a state that is always tracking what is inside input. (Do what liam did in messages).

//So we'll have some
//eventlistener (onChange) embedded and that is going to call the SetValue state in the footer.
//Add new function that is handler and we <input onChange = {setValuefunction()} onKeyDown = {} />
//on keydown function is going to take the value of the state (input value) and send to backend and its going to wait for
//response on backend and then its going to take response and append that response into the previous value of SetMessages (we're going to call
//the function to change the state of the App)
