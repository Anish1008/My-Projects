import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
// import IconButton from '@mui/material/IconButton';
import { IconButton } from '@material-ui/core';
function Header() {
    return (
        <div className='header'>
            {/* <h2>I am header</h2> */}
            <IconButton className='iconbutton'>
            <PersonIcon fontSize='Large' className='headericon'/>
            </IconButton>
            <img className='headerlogo' src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png" alt="" />
            <IconButton className='iconbutton'>
            <ForumIcon fontSize='Large' className='headericon'/>
            </IconButton>
            
        </div>
    );
}

export default Header;
