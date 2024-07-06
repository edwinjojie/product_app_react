import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './components/Add'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    
      Welcome
      <Navbar/>
      <Routes>
      <Route path='/'element={<Add/>}></Route>
      <Route path='/home' element={<Dashboard/>}></Route>
    
      </Routes>
    
    
       
      
    </>
  )
}

export default App
