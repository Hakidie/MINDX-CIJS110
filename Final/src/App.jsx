import { useState } from 'react'
import './App.css'

import ToDoPage from './pages/ToDo/ToDo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDoPage />
    </>
  )
}

export default App
