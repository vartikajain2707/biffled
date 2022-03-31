import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BiffledCards from "./BiffledCards";
import SwipeButtons from "./SwipeButtons";
import Header from "./Header";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  

  return (
    
    <div className="App">
      
      <Router>
        
        <Routes>
          <Route path="/chat/:person" element={[<Header backButton="/chat" />, <ChatScreen />]}></Route>
          <Route path="/chat" element={[<Header backButton="/" />, <Chats />]}></Route>
          <Route path="/" element={[<BiffledCards /> ,<SwipeButtons />, <Header />]}> </Route>
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
