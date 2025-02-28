import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Project from './components/Projects'
import Skills from './components/Skills'
import AchievementShowcase from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased'>
      <Navbar />
      <HeroSection />
      <About />
      <Project />
      <Skills />
      <AchievementShowcase />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default App