import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Bio,Career,Contact, Hero,Nav, Skills } from './components'
  
function App() {
  return (
    <BrowserRouter>
      <div className='main-container'>
        <Nav/>
        <Hero/>
        <Career/>
        <Bio/>
        <Skills/>
        <Contact/>
      </div>
    </BrowserRouter>
  )
}

export default App
