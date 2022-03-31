import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import logo from './photos/biffled.jpeg';
import IconButton from '@mui/material/IconButton';
import {Link, useNavigate} from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Header({backButton}) {
  const navigate=useNavigate();

  return (
    <div className='header'>
        {backButton ? (
          <IconButton onClick={()=>navigate(-1)}>
            <ArrowBackIosIcon fontSize="large" className="header__icon"></ArrowBackIosIcon>
          </IconButton>
          
        ):(
          <IconButton>
            <PersonIcon className="header__icon" fontSize="large"></PersonIcon>
          </IconButton>
        )}
        
        <Link to="/">
          <img className='header__logo' src={logo} alt={"logo"}></img>
        </Link>
        
        <Link to="/chat">
          <IconButton>
              <ForumIcon className="header__icon" fontSize='large'></ForumIcon>
          </IconButton>
        </Link>
        
        
    </div>
  )
}

export default Header