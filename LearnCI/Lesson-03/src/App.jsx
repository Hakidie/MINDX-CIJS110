import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello from './components/Hello/index.jsx'
import Card from './components/Card/index.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const school = "MindX";

  return (
    <>
      <Card studentName="Nguyễn Văn Tài" className="Code Intensive" studentGoal="Trở thành master coding là ước mơ của tôi" />
      <Card studentName="Trịnh Mẫn Nhi" className="Web Fullstack" studentGoal="Học, học nữa, học mãi" />
      <Card studentName="Vũ Long Môn" className="Code For Everyone" studentGoal="Quyết tâm thành thạo Reactjs" />
    </>
  )
}

export default App
