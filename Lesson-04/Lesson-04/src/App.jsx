import './App.css'
import React, { useState } from 'react';
import Toolbar from './components/Toolbar/index.jsx';
import Column from './components/Column/index.jsx';
import {toDoData, inProgressData, doneData, inReviewData} from './components/Data/data.jsx';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterCards = (cards) => {
        return cards.filter(card => 
            card.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            card.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

  return (
    <>
      <div className="home">
        <div className="header">
          <Toolbar onSearch={setSearchTerm}/>
        </div>
        
        <div className='main'>
          <Column columnTitle="To do" cardsData={filterCards(toDoData)}/>
          <Column columnTitle="In Progress" cardsData={filterCards(inProgressData)}/>
          <Column columnTitle="In Review" cardsData={filterCards(inReviewData)}/>
          <Column columnTitle="Done" cardsData={filterCards(doneData)}/>
        </div>
      </div>
      
    </>
  )
}

export default App
