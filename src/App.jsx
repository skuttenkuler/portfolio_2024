import React, {useRef} from 'react'
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Nav, Portfolio, Projects, Skills } from './components'

function App() {
  const wrapperRef = useRef(window.screenTop);
  return (
    <BrowserRouter>
    <div className='main-container'>
      <Nav/>
      <Hero scrollContainer={wrapperRef}/>
      <Experience/>
      <Skills/>
      <Portfolio/>
      <Projects/>
      <Contact/>
      </div>
    </BrowserRouter>
  )
}

export default App
