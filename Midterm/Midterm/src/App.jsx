import './App.css'

import Header from '../components/Header/Header'
import Home from '../components/Home/Home'

import { data } from '../components/Data/Data'


function App() {

  return (
    <>
      <Header />
      <Home movieData={data} />
    </>
  )
}

export default App
