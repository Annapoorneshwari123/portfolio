import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/header/pages/Home'
import About from './components/header/pages/About'

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      

    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App