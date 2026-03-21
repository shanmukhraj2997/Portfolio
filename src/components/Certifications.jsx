import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

const certificates = [
  { name: "Introduction to Internet of Things - NPTEL", link: "https://drive.google.com/file/d/1MtOpGEW94L7aaLKwpshV1USGZQokldXX/preview" },
  { name: "Generative AI Workshop - AGI Scholars", link: "https://drive.google.com/file/d/1-wkm2WY6Ijow61pbFFJG4wN1cowDLefO/preview" },
  { name: "TCP/IP and Advanced Topics - Coursera", link: "https://drive.google.com/file/d/1-1gbhbfBQDCv5vc6Fb6kORgmD9ESGdIz/preview" },
  { name: "Introduction to Hardware and Operating Systems - Coursera", link: "https://drive.google.com/file/d/10iRVYhi8oj4zZDNdVi7j5zf6rIDUmTMB/preview" },
  { name: "The Bits and Bytes of Computer Networking - Coursera", link: "https://drive.google.com/file/d/10gcFa0sqlAVc5SDL0HpHR3NmhELvtU5H/preview" },
]

const Certifications = () => {
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
    <section id="certifications" className="py-32 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-500 inline-block drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">Certifications</h2>
        <p className="text-gray-300 text-lg font-medium drop-shadow-md">Professional training and coursework.</p>
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
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-[85vw] sm:w-[320px] lg:w-[350px] snap-center shrink-0 group block"
          >
            <a 
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="glass-card rounded-3xl p-6 flex flex-col h-full hover:border-[#4a4a4a] hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="mb-6 h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-200 leading-snug flex-1 pr-6 relative z-10 group-hover:text-white transition-colors">
                {cert.name}
              </h3>
              
              <div className="absolute right-6 bottom-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-gray-400 duration-300">
                <ExternalLink size={20} />
              </div>
            </a>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
