import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import './App.css';
import EmailList from "./EmailList";

function App() {
  return (
    <div>
    <Header/>
    <div className="app__body">
    <SideBar/>
    <EmailList/>
    </div>
    </div>
  );
}

export default App;
