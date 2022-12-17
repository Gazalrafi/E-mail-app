import react from 'react';
import ReorderIcon from '@material-ui/icons/Reorder';
import { IconButton,Avatar } from '@material-ui/core';
import  './Header.css';
import SearchIcon  from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon  from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';


const Header=()=>{
return (
    <div className='header'>
        <div className='header__left'>
            <IconButton>
            <ReorderIcon/>
            </IconButton>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKFDitXKjrn4qokKOS848_1BU3I_ZCEo7Ug&usqp=CAU' alt='logo' className='image'/>
        </div>
        <div className='header__middle'>
            <div className="search_mail">
            <IconButton>
            <SearchIcon/>
            </IconButton>
            <input placeholder='search your mail'/>
            <IconButton>
            <ExpandMoreIcon/>
            </IconButton>
            </div>
        </div>
        <div className='header__right'>
        <IconButton>
            <HelpOutlineIcon/>
        </IconButton>

        <IconButton>
            <SettingsIcon/>
        </IconButton>

        <IconButton>
            <AppsIcon/>
        </IconButton>
         <Avatar/>
        </div>
    </div>
)
}
export default Header;