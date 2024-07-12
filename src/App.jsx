import React, {useRef} from 'react'
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Nav, Portfolio, Projects, Skills } from './components'

function App() {
  const wrapperRef = useRef(window.screenTop);
  return (
    <BrowserRouter>
    <h1 className="text-3xl font-bold underline text-amber-500">
      Hello world!
    </h1>
    <div className='relative z-0 bg-primary'>
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
