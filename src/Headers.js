import React from "react";
import HeaderOptions from "./HeaderOptions";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Header.css";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
const Header = () => {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  const logoutOfApp=()=>{
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://img.icons8.com/fluency/50/000000/linkedin.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={SmsIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions
          avatar={user.photoUrl}
          title="Me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
};

export default Header;
