import React from 'react';
import "./Chats.css";
import Chat from "./Chat";
import SearchIcon from '@mui/icons-material/Search';

function Chats() {
  return (
    <div className='chats'>
        <div className='chats__search'>
            <div className='chats__searchContainer'>
                <SearchIcon></SearchIcon>
                <input placeholder='Search or start a new chat' type="text"></input>
            </div>
        </div>
        <Chat 
            name="Vartika"
            message="Hey,How are you"
            timestamp="35 minutes ago"
            profilePic="https://upload.wikimedia.org/wikipedia/en/9/96/SatoruGojomanga.png">
        </Chat>
        <Chat 
            name="Suss"
            message="Yo whatsupp"
            timestamp="2 minutes ago"
            profilePic="https://upload.wikimedia.org/wikipedia/en/4/4c/GokumangaToriyama.png">
        </Chat>
        <Chat 
            name="Ellen"
            message="ola"
            timestamp="2 days ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ellen_DeGeneres_2011.jpg/330px-Ellen_DeGeneres_2011.jpg">
        </Chat>
        <Chat 
            name="Jimmy"
            message="there you go"
            timestamp="4 days ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Jimmy_Fallon%2C_Montclair_Film_Festival%2C_2013.jpg/330px-Jimmy_Fallon%2C_Montclair_Film_Festival%2C_2013.jpg">
        </Chat>
    </div>
  )
}

export default Chats