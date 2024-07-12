import React, {useRef} from 'react'
import './App.css'
import { Contact, Experience, Hero, Nav, Portfolio, Projects, Skills } from './components'

function App() {
  const wrapperRef = useRef(null);
  return (
    <div>
      <Nav/>
      <div className='wrapper' ref={wrapperRef}>
        <Hero scrollContainer={wrapperRef}/>
        <Experience/>
        <Skills/>
        <Portfolio/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
