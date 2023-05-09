import { Avatar } from '@mui/material';
import React,{useState,forwardRef} from 'react'
import InputOptions from './InputOptions';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import './Post.css'
const Post = forwardRef(({ name,desc,message,photoUrl ,avt},ref) => {
  const user=useSelector(selectUser);
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={avt} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
        <div className="post__pic">
          <img
            src="https://i.pinimg.com/originals/e8/4e/db/e84edb279472c7ab49e97ec276d4ffda.gif"
            alt="pic"
          />
        </div>
      </div>

      <div className="post__buttons">
        <InputOptions Icon={ThumbUpOffAltIcon} title="Like" />
        <InputOptions Icon={InsertCommentIcon} title="Comment" />
        <InputOptions Icon={RepeatIcon} title="Repost" />
        <InputOptions Icon={SendIcon} title="Send" />
      </div>
    </div>
  );
})

export default Post;
