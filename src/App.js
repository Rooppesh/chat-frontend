import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios";
import Config from "./config.js";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/v1/message/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher(Config.PUSHER_KEY, {
      cluster: Config.PUSHER_CLUSTER,
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessages) => {
      setMessages([...messages, newMessages]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Route path="/">
              <Sidebar />
            </Route>
            <Route path="/room/:roomId">
              <Sidebar />
              <Chat messages={messages} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
