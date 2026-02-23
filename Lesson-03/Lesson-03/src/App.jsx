import './App.css'
import Toolbar from './components/Toolbar/index.jsx';
import Column from './components/Column/index.jsx';

function App() {
  

  return (
    <>
      <div className="home">
        <div className="header">
          <Toolbar />
        </div>
        
        <div className='main'>
          <Column />
        </div>
      </div>
      
    </>
  )
}

export default App
