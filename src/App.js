import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import './App.css';
import EmailList from "./EmailList";
import Compose from "./Compose";
import {useSelector} from 'react-redux';
import { selectSendMessageIsOpen } from "./features/mailSlice";


function App() {
   const isMessageOpen= useSelector(selectSendMessageIsOpen);
     return (
    <div>
    <Header/>
    <div className="app__body">
    <SideBar/>
    <EmailList/>
    </div>
    {isMessageOpen && <Compose/>}
    </div>
  );
}

export default App;
