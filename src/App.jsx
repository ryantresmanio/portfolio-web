import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Other from './Other'
import Contact from './Contact'

function App() {
    const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
  <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
    </div>
  )
}

export default App
