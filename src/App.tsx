import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Home from './Home.tsx'
import Weather from './Weather.tsx'

function App() {
  
  const [currentPage, setCurrentPage] = useState('home')
  return (
    <>

<br></br>
<div className = "nav">
          <button id = "home-button" onClick={()=> setCurrentPage('home')}>Home</button>
          <button id = "weather-button"onClick={()=> setCurrentPage('weather')}>Weather</button>
          


      </div>

      <div style={{ width: '100%' }}>
        {currentPage=='home' && <Home />}

        {currentPage=='weather' && <Weather />} 
      </div>

      
    </>
      
  )
}

export default App
