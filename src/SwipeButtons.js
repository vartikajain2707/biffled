import React from 'react';
import "./SwipeButtons.css";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className='replay'>
            <ReplayIcon fontSize='large'></ReplayIcon>
        </IconButton>
        <IconButton className='close'>
            <CloseIcon fontSize='large' ></CloseIcon>
        </IconButton>
        <IconButton className='star'>
            <StarIcon fontSize='large'></StarIcon>
        </IconButton>
        <IconButton className='favorite'>
            <FavoriteIcon fontSize='large'></FavoriteIcon>
        </IconButton> 
        <IconButton className='flash'>
            <FlashOnIcon fontSize='large'></FlashOnIcon>
        </IconButton>
        
        
        
        
        
    </div>
  )
}

export default SwipeButtons