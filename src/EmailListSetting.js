import React from 'react';
import './EmailListSetting.css';
import { IconButton } from '@material-ui/core';
import { CheckBoxOutlineBlank,ArrowDropDown,Refresh,MoreVert,ChevronLeft,ChevronRight } from '@material-ui/icons';


function EmailListSetting() {
  return (
    <div className='emaillist__settings'>
     <div className='emaillist__settingsLeft'>
      <IconButton>
        <CheckBoxOutlineBlank/>
      </IconButton>

      <IconButton>
        <ArrowDropDown/>
      </IconButton>

      <IconButton>
        <Refresh/>
      </IconButton>

      <IconButton>
        <MoreVert/>
      </IconButton>
     </div>
     <div className='emaillist__settingsRight'>

      <p>1-50 of 10,222</p>

     <IconButton>
        <ChevronLeft/>
     </IconButton>

     <IconButton>
        <ChevronRight/>
     </IconButton>

     </div>
    </div>
  )
}

export default EmailListSetting