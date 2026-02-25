import './App.css'
import React, { useState } from 'react';
import Toolbar from './components/Toolbar/index.jsx';
import Column from './components/Column/index.jsx';
import Modal from './components/Modal/modal.jsx';
import {toDoData, inProgressData, doneData, inReviewData} from './components/Data/data.jsx';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterCards = (cards) => {
        return cards.filter(card => 
            card.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            card.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() {
      setIsModalOpen(!isModalOpen);
    }

    console.log(`Current modal state: ${isModalOpen}`);

  return (
    <>
      
      <div className="home">
        <div className="header">
          <Toolbar onSearch={setSearchTerm} toggleModal={toggleModal} />
        </div>
        
        <div className='main'>
          <Column columnTitle="To do" cardsData={filterCards(toDoData)}/>
          <Column columnTitle="In Progress" cardsData={filterCards(inProgressData)}/>
          <Column columnTitle="In Review" cardsData={filterCards(inReviewData)}/>
          <Column columnTitle="Done" cardsData={filterCards(doneData)}/>

          <Modal isOpened={isModalOpen} toggleModal={toggleModal}/>
        </div>
      </div>
      
    </>
  )
}

export default App
