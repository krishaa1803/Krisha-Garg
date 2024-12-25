import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Project/Project'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App