import { Avatar } from "@mui/material";
import JavascriptIcon from '@mui/icons-material/Javascript';
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
const Sidebar = () => {
   const user=useSelector(selectUser);
    
    const recentItem=(topic)=>(
        <div className="sidebar__recentItem">
          
            <p>{topic}</p>
        </div>
    );
    
  return (
    <div className="Sidebar">
      <div className="sidebar__top">
        <img
          src="https://media.licdn.com/dms/image/D4D16AQENUjJhL7Mp8g/profile-displaybackgroundimage-shrink_350_1400/0/1666280194714?e=1689206400&v=beta&t=FnLVQdvJ26jeaWNfxw5hxJzgruJMQcCDPyT6Okidxr0"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avtar" />
        <h2> {user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("Reactjs")}
        {recentItem("Programming")}
        {recentItem("User Experience Design (UX)")}
        {recentItem("Redux")}
      </div>
    </div>
  );
};

export default Sidebar;
