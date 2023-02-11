import { Avatar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventIcon from "@mui/icons-material/Event";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import React, { useState, useEffect } from "react";
import InputOptions from "./InputOptions";
import Post from "./Post.js";
import { auth, db } from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Feed.css";
const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      desc: user.email,
      message: input,
      photoUrl: user.photoUrl,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Avatar src={user.photoUrl} className="feed__avt" />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOptions Icon={ImageIcon} title="Photo" color="#378fe9" />
          <InputOptions Icon={SmartDisplayIcon} title="Video" color="#5f9b41" />
          <InputOptions Icon={EventIcon} title="Event" color="#c37d16" />
          <InputOptions
            Icon={VerticalSplitIcon}
            title="Write Article"
            color="#e16745"
          />
        </div>
      </div>
      {/* <Post
        name="Archie Chandel"
        desc="Chitkara University || 2nd year"
        message="Hi am archie currently pursuing B.E CSE 3rd year from Chitkara University"
        photoUrl='https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80'
      /> */}
      {posts.map(({ id, data: { name, desc, message, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            desc={desc}
            message={message}
            // photoUrl={photoUrl1}
            avt={photoUrl}
          />
        );
      })}{" "}
    </div>
  );
};

export default Feed;
