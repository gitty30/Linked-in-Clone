import React from 'react'
import { Avatar } from '@mui/material';
import "./HeaderOptions.css";

const HeaderOptions = ({avatar,Icon,title,onClick}) => {
  return (
    <div onClick={onClick} className="headerOptions">
        {Icon && <Icon className="headerOptions_icon"/>}
        {avatar && <Avatar className="headerOption_icon" src={avatar}/>}
         <h3 className='headerOptions_title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions;
