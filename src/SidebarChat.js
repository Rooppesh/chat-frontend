import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
function SidebarChat({ id, name }) {
  return (
    <Link to={`/room/${id}`}>
      <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Last Message...</p>
        </div>
      </div>
    </Link>
  );
}

export default SidebarChat;
