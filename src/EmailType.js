import React from 'react';
import './EmailType.css';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


function EmailType() {
  return (
    <div className='emailtype'>
        <div className='emailtype__options emailtype__options--active' >
           <InboxIcon/>
           <p>Primary</p>
        </div>

        <div className='emailtype__options'>
           <PeopleAltIcon/>
           <p>Social</p>
        </div>

        <div className='emailtype__options'>
           <LocalOfferIcon/>
           <p>Promotions</p>
        </div>

    </div>
  )
}

export default EmailType;