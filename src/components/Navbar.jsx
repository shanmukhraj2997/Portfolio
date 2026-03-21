import React from 'react'
import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin } from 'lucide-react'

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Project', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certs', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none"
    >
      <div className="w-full max-w-6xl bg-black/50 backdrop-blur-xl pointer-events-auto border border-white/10 rounded-full px-8 py-4 flex items-center justify-between shadow-2xl">
        <div className="text-xl font-bold tracking-[0.3em] text-white" style={{ textShadow: '0 0 5px rgba(255,255,255,0.8), 0 0 15px rgba(255,255,255,0.5)' }}>
          s h a n m u k h
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/shanmukhraj2997" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.instagram.com/demonic_sunny/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="http://www.linkedin.com/in/pshanmukh-raj/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
