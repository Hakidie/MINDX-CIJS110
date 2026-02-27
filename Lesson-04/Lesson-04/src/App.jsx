import './App.css'
import React, { useState } from 'react';
import Toolbar from './components/Toolbar/index.jsx';
import Column from './components/Column/index.jsx';
import Modal from './components/Modal/modal.jsx';
import {toDoData, inProgressData, doneData, inReviewData} from './components/Data/data.jsx';

const columnConfig = [
  { key: "toDo", title: "To do" },
  { key: "inProgress", title: "In Progress" },
  { key: "inReview", title: "In Review" },
  { key: "done", title: "Done" }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeColumn, setActiveColumn] = useState(null);
  const [editingCard, setEditingCard] = useState(null);
  
  const filterCards = (cards) => {
    return cards.filter(card => 
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      card.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  function toggleModal() {
    setIsModalOpen(prev => {
      if (prev === true) setEditingCard(null);
      return !prev;
    });
  }

  const addTask = (newTask) => {
    if (!activeColumn) return;

    setColumns(prev => ({
      ...prev,
      [activeColumn]: [
        ...prev[activeColumn],
        { ...newTask, id: Date.now() }
      ]
    }));
  };

  const updateTask = (updatedTask) => {
    setColumns(prev => ({
      ...prev,
      [activeColumn]: prev[activeColumn].map(card =>
        card.id === updatedTask.id ? updatedTask : card
      )
    }));
    setEditingCard(null);
  };

  const [columns, setColumns] = useState({
    toDo: toDoData,
    inProgress: inProgressData,
    inReview: inReviewData,
    done: doneData
  });

  return (
    <>
      
      <div className="home">
        <div className="header">
          <Toolbar onSearch={setSearchTerm} toggleModal={toggleModal} />
        </div>
        
        <div className='main'>
          {/* <Column columnTitle="To do" cardsData={filterCards(columns.toDo)} toggleModal={toggleModal} openModal={() => {setActiveColumn("toDo"); toggleModal();}}/>
          <Column columnTitle="In Progress" cardsData={filterCards(columns.inProgress)} openModal={() => {setActiveColumn("inProgress"); toggleModal();}}/>
          <Column columnTitle="In Review" cardsData={filterCards(columns.inReview)} openModal={() => {setActiveColumn("inReview"); toggleModal();}}/>
          <Column columnTitle="Done" cardsData={filterCards(columns.done)} openModal={() => {setActiveColumn("done"); toggleModal();}}/> */}

          {columnConfig.map(column => (
            <Column
              key={column.key}
              columnKey={column.key}
              columnTitle={column.title}
              cardsData={filterCards(columns[column.key])}
              openModal={() => {
                setActiveColumn(column.key);
                setEditingCard(null);
                setIsModalOpen(true);
              }}
              onEditCard={(card, columnKey) => {
                setActiveColumn(columnKey);
                setEditingCard(card);
                setIsModalOpen(true);
              }}
            />
          ))}

          <Modal isOpened={isModalOpen} toggleModal={toggleModal} onSave={editingCard ? updateTask : addTask} editingCard={editingCard}/>
        </div>
      </div>
      
    </>
  )
}

export default App
