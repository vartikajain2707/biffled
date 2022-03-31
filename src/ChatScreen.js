import { Avatar } from '@mui/material';
import React,{useEffect, useState} from 'react';
import "./ChatScreen.css";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';




function ChatScreen() {
    
    const [input,setInput]=useState("");
    const [messages,setMessages]=useState([
        {
            name:"Vartika",
            image:"https://upload.wikimedia.org/wikipedia/en/9/96/SatoruGojomanga.png",
            message:"Whats up"
        },
        {
            name:"Vartika",
            image:"https://upload.wikimedia.org/wikipedia/en/9/96/SatoruGojomanga.png",
            message:"Hows it going"
        },
        {
            message:"How are you"
        },
        {
            message:"This is amazing"
        },
        {
            name:"Vartika",
            image:"https://upload.wikimedia.org/wikipedia/en/9/96/SatoruGojomanga.png",
            message:"Yess I know"
        },
    ]);

    const sendMessage =(e)=>{
        e.preventDefault();
        console.log(input);
        setInput("");
    }

    return (
        <div className='ChatScreen'>
            <p className='chatScreen__timestamp'>YOU CONNECTED WITH VARTIKA ON 10/02/2022</p>

            {messages.map(message=>(
                message.name ?(
                    <div className='chatScreen__message'>
                        <Avatar className='chatScreen__image' alt={message.name} src={message.image}>
                        </Avatar>
                        <p className='chatScreen__text'>{message.message}</p>
                    </div>
                ):(
                    <div className='chatScreen__message'>
                    <p className='chatScreen__textUser'>{message.message}</p>
                </div>
                )
                
            ))}
            <div className='chatScreen__footer'>
                <InsertEmoticonIcon></InsertEmoticonIcon>
                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder='Type a message'></input>
                    <button type='submit' onClick={sendMessage}>Send a Message</button>
                </form>
                <MicIcon></MicIcon>
            </div>
        </div>
    )
    }

export default ChatScreen