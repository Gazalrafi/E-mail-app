import React, { useState,useRef } from 'react';
import JoditEditor from 'jodit-react';
import { Remove,Height,Close,ArrowDropDown } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import './Compose.css';
import { closeSendMessage } from './features/mailSlice';
import firebase from 'firebase/compat/app';
import { db } from './firebase.js';


const Compose=()=>{
    const[to,setTo] =useState('');
    const[subject,setSubject]=useState('');
    const[message,setMessage]=useState('');
    const messageRef=useRef();
    const dispatch=useDispatch();

    const formSubmit=(e)=>{
    e.preventDefault();
    const msg= messageRef.current.value;

    if(to===" "){
       alert('please fill To field');
    }
    if(subject===" "){
       alert('please fill subject field');
    }
    if(message===" "){
       alert('please fill message field');
    }
    db.collection("emails").add({
      to:to,
      subject:subject,
      message:message,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
    setTo('');
    setSubject('');
    setMessage('');
    alert('email sent successfully');
    dispatch(closeSendMessage());
    }
return (
<div className='compose'>
    <div className='compose__header'>
       <div className='compose__header__left'>
         <span>New Message</span>
       </div>

       <div className='compose__header__right'>
         <Remove/>
         <Height/>
         <Close onClick={()=>dispatch(closeSendMessage())}/>
       </div>
    </div>
     <form onSubmit={formSubmit}>
    <div className='compose__body'>
        <div className='compose__bodyForm'>
            <input type='email' placeholder='Reciepents' value={to} onChange={(e)=>setTo(e.target.value)}/>

            <input type='text' placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>

            <JoditEditor ref={messageRef} value={message} onChange={(content)=>setMessage(content)}/>
         </div>
    </div>

    <div className='compose__footer'>
     
       <button type='submit'>Send <ArrowDropDown/></button>
   
    </div>
    </form>
</div>
)
}
export default Compose;