import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Plants from './plants'
import PlantDetails from './plant_details'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Plants />} />
          <Route path="/:id" element={<PlantDetails />} />
        </Routes>
    </BrowserRouter>
        {/* <Plants /> */}
    </>
  )
}

export default App
