import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import materialMgmtImg from '../assets/material-management.png'
import currencyConverterImg from '../assets/currency-converter.png'

const projects = [
  {
    title: "MovinAir",
    tech: ["WordPress"],
    desc: "Replicated the MovinAir website design and functionality using WordPress, closely matching the original layout.",
    impact: "Customized themes and plugins to implement dynamic content management and interactive features, ensuring smooth rendering across all devices.",
    link: "https://sunnymoveinair.free.nf/",
    github: null,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "LocalEats",
    tech: ["React", "Node.js", "MongoDB", "Tailwindcss"],
    desc: "Engineered a full-stack web application inspired by Swiggy, enabling discovery and ordering from local stores and shops.",
    impact: "Architected a Node.js backend with MongoDB for efficient data management, optimizing scalability through modular component design.",
    link: "https://github.com/shanmukhraj2997/Local-Eats",
    github: "https://github.com/shanmukhraj2997/Local-Eats",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Material Management",
    tech: ["Tailwind CSS", "PHP", "JavaScript"],
    desc: "Crafted a web-based disaster relief management platform to monitor, allocate, and track essential resources in real time.",
    impact: "Elevated tracking accuracy and distribution efficiency by 30% through reduction of manual errors and refinement of response workflows.",
    link: "https://mgmt.lovestoblog.com/",
    github: "https://github.com/Demon-sunny/Mgmt-of-material-during-Disaster--receipt-availability-movement-and-its-receipt-to-the-last-person",
    image: materialMgmtImg
  },
  {
    title: "Secure Auth Module",
    tech: ["C++"],
    desc: "Engineered a multi-layer authentication mechanism integrating OTP generation, CAPTCHA verification, and passkey validation.",
    impact: "Strengthened system security by over 35% in controlled test scenarios, mitigating potential authentication vulnerabilities.",
    link: "https://github.com/Demon-sunny/Secure-Authentication-Module-",
    github: "https://github.com/Demon-sunny/Secure-Authentication-Module-",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Currency Converter",
    tech: ["HTML", "CSS", "PHP"],
    desc: "Developed an interactive currency conversion tool delivering accurate, real-time exchange computations with a smooth interface.",
    impact: "Optimized backend computations, accelerating processing speed and enhancing overall system reliability.",
    link: "https://github.com/Demon-sunny/Currency-Converter-Bot",
    github: "https://github.com/Demon-sunny/Currency-Converter-Bot",
    image: currencyConverterImg
  }
]

const Projects = () => {
  const sliderRef = useRef(null)

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <section id="projects" className="py-32 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-500 inline-block drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">Featured Projects</h2>
        <p className="text-gray-300 text-lg font-medium drop-shadow-md">A collection of my recent work and experiments.</p>
      </div>

      <div className="relative group">
        {/* Navigation Arrows */}
        <button 
          onClick={slideLeft}
          className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#1a1a1a]/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-white/10 hover:bg-white hover:text-black hover:scale-110 hidden md:flex"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={slideRight}
          className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#1a1a1a]/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-white/10 hover:bg-white hover:text-black hover:scale-110 hidden md:flex"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slider Container */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbars"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-[85vw] sm:w-[320px] lg:w-[350px] snap-center group glass-card rounded-[2rem] overflow-hidden flex flex-col h-full hover:border-[#444] transition-all duration-500 shrink-0"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all text-white">
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all text-white">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1 gap-4">
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                
                {/* Tech Badges */}
                <div 
                  className="flex gap-2 overflow-x-auto hide-scrollbars whitespace-nowrap py-1"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-white/5 border border-white/5 rounded-full text-gray-400 shrink-0">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  {project.desc}
                </p>
                
                <div className="mt-auto pt-4 border-t border-white/5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#555] mb-2">Impact</p>
                  <div className="max-h-[60px] overflow-y-auto hide-scrollbars pr-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <p className="text-emerald-500/80 text-xs font-medium leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 mt-2">
                  {project.github ? (
                    <a 
                      href={project.github}
                      target="_blank" rel="noreferrer"
                      className="flex-1 py-3 bg-white/5 rounded-xl text-center text-sm font-bold hover:bg-white/10 transition-all"
                    >
                      GitHub
                    </a>
                  ) : (
                    <div className="flex-1 py-3 bg-white/5 rounded-xl text-center text-sm font-bold opacity-50 cursor-not-allowed">
                      Private
                    </div>
                  )}
                  <a 
                    href={project.link}
                    target="_blank" rel="noreferrer"
                    className="flex-1 py-3 bg-white text-black rounded-xl text-center text-sm font-bold hover:bg-gray-200 transition-all"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
