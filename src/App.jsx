import React from 'react'
import Hero from './components/layout/Navbar'
import Navbar from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import { Contact } from 'lucide-react'
import Contacts from './components/sections/Contacts'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-black/100 gb-[100vh]'>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contacts />
      </main>
      <Footer/>
    </div>
  )
}

export default App
