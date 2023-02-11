// import { Email } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const loginToApp = (e) => {
    // auth;
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL,
        })
      );
    }).catch((error)=>alert(error));

  };
  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="Login">
      <img
        src="https://telanganatoday.com/wp-content/uploads/2021/09/LinkedIn-to-suspend-its-Stories-feature-on-September-30.jpg"
        alt="linekd in picture"
      />
      <div className="Login__box">
        <div className="Login__header">
          <h1>Login</h1>
          <p> Stay updated on your professional world</p>
        </div>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="name"
        />
        <input
          type="text"
          placeholder="Profile pic (url)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          className="name"
        />
        <input
          type="email"
          placeholder="Email or Phone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="name"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="Login__forgot">Forgot Password?</p>
        <button type="submit" onClick={loginToApp}>
          Login
        </button>
        <p className="regi_p">
          Not a member?{" "}
          <span className="regi" onClick={register}>
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
