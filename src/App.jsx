import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Nav, Projects, Skills } from './components'

function App() {
  return (
    <BrowserRouter>
      <div className='main-container'>
        <Nav/>
        <Hero/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </BrowserRouter>
  )
}

export default App
