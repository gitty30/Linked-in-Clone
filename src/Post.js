import { Avatar } from '@mui/material';
import React,{useState} from 'react'
import InputOptions from './InputOptions';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import './Post.css'
const Post = ({ name,desc,message,photoUrl ,avt}) => {
  const user=useSelector(selectUser);
  return (
    <div className="post">
        <div className="post__header">
            <Avatar src={avt}/>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
            <div className='post__pic'>

            <img src={photoUrl} alt="pic"/>
            </div>
        </div>
      
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpOffAltIcon} title="Like"/>
        <InputOptions Icon={InsertCommentIcon} title="Comment"/>
        <InputOptions Icon={RepeatIcon} title="Repost"/>
        <InputOptions Icon={SendIcon} title="Send"/>
      </div>
    </div>
  )
}

export default Post;
