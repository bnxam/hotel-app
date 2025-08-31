import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Acceuil from './pages/acceuil'
import './App.css'

import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Acceuil/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
