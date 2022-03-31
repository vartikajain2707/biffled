import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import database from "./firebase";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import "./BiffledCards.css";




function BiffledCards() {
    const [people, setPeople]= useState([]);
    // const people=[]
    useEffect(()=>{

        const unsubscribe=database.collection('people').onSnapshot((snapshot)=>
            setPeople(snapshot.docs.map((doc)=>doc.data()))
        );
        return ()=>{
            unsubscribe();
        }
    },[])
    return (
        <div>
            <div className='BiffledCards__cardContainer'>
            { people.map(person=>(
                <TinderCard className="swipe" key={person.name} preventSwipe={['up','down']}>
                    <div className='card' style={{backgroundImage:`url(${person.url})`}}>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            )) }
            </div>
        
        </div>
    )
    }

export default BiffledCards