import React, { useEffect } from "react";
import Header from "./Headers";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Feed from "./Feed";
import Login from "./Login";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{

    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL
        }))
      }
      else{
        dispatch(logout());
      }
    })

  },[]);
  return (
    <div>
    
      {!user ? (
        <Login />
      ) : (
        <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
        </div>
      )}
    </div>
  );
}

export default App;
