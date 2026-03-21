import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import BackgroundParticles from './components/BackgroundParticles'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen text-gray-200 selection:bg-white selection:text-black font-sans overflow-x-hidden">
      {/* Fixed Background Image with Dark Overlay */}
      <div 
        className="fixed inset-0 z-[-2] bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/shrine-bg2.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#06060c]/50"></div>
      </div>
      
      {/* Interactive Particles Layer */}
      <div className="fixed inset-0 z-[-1]">
        <BackgroundParticles />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
