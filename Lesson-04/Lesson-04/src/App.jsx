import './App.css'
import Toolbar from './components/Toolbar/index.jsx';
import Column from './components/Column/index.jsx';
import {toDoData, inProgressData, doneData, inReviewData} from './components/Data/data.jsx';

function App() {
  

  return (
    <>
      <div className="home">
        <div className="header">
          <Toolbar />
        </div>
        
        <div className='main'>
          <Column columnTitle="To do" cardsData={toDoData}/>
          <Column columnTitle="In Progress" cardsData={inProgressData}/>
          <Column columnTitle="In Review" cardsData={inReviewData}/>
          <Column columnTitle="Done" cardsData={doneData}/>
        </div>
      </div>
      
    </>
  )
}

export default App
