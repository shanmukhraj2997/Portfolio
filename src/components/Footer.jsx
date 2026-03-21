import React from 'react'
import { Github, Instagram, Linkedin, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-white/5 mt-32">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-full text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white drop-shadow-md">
            © 2026 SHANMUKH RAJ. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300 flex items-center justify-center gap-2">
            Built with <Heart size={12} className="text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
