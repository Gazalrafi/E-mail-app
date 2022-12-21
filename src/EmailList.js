import React,{useEffect, useState} from 'react';
import EmailBody from './EmailBody';
import './EmailList.css';
import EmailListSetting from './EmailListSetting';
import EmailType from './EmailType';
import {db} from './firebase.js';

function EmailList() {

  const [emails,setEmails]=useState([]);

  useEffect(()=>{
    db.collection('emails').orderBy("timestamp","desc").onSnapshot(snapshot=>{
      setEmails(snapshot.docs.map(doc=>({
        id:doc.id,
        key:doc.id,
        data:doc.data()
      })));
    })
  },[])
   console.log(emails)
  return (
    <div className='emaillist'>
       <EmailListSetting/>
       <EmailType/>

      {
        emails.map(({id,data})=>{
          return <EmailBody 
          key={id}
          name={data.to} 
          subject={data.subject}message={data.message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}/>
        })
      }
 
    </div>
  )
}

export default EmailList