import React, { useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from 'framer-motion'
import { Download } from 'lucide-react'
import cvFile from "../assets/General-CV(Sunny')_1774079100.pdf"
import heroImage from '../assets/hero-front-glasses.png'
import sunnyImage from '../assets/sunny1.jpeg'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)

  // 3D Parallax State
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spotlight Lens State
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15])

  // Huge, brighter cinematic flashlight reveal + expanded soft ellipse clipping his face
  const dualMask = useMotionTemplate`radial-gradient(circle 250px at ${mouseX}px ${mouseY}px, black 30%, transparent 90%), radial-gradient(ellipse 35% 55% at 50% 36%, black 70%, transparent 100%)`

  const handleMouseMove = (event) => {
    // 3D Space
    const pctX = (event.clientX / window.innerWidth) - 0.5
    const pctY = (event.clientY / window.innerHeight) - 0.5
    x.set(pctX)
    y.set(pctY)

    // Spotlight Space
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set(event.clientX - rect.left)
    mouseY.set(event.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <section 
      id="home" 
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0">
        <h1 
          className="text-[14vw] font-normal text-[#3a3a3a] whitespace-nowrap leading-none tracking-tight font-sans mt-20"
          style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.15)' }}
        >
          Hi! I'm Shanmukh
        </h1>
      </div>

      {/* Interactive 3D Character Image Container */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 w-full max-w-4xl h-[75%] flex flex-col items-center justify-end pointer-events-auto group"
      >
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{ 
            maskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 100%)', 
            WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 100%)',
            transform: 'translateZ(50px)' 
          }}
        >
          {/* Anime Image (Default) - Always visible */}
          <img 
            src={heroImage} 
            alt="Shanmukh Character" 
            style={{ filter: 'contrast(1.2) brightness(1.1)' }}
            className="absolute inset-x-0 bottom-0 w-full h-full object-contain object-bottom mix-blend-screen opacity-90"
          />
          
          {/* Real Image (Spotlight Reveal + Soft Edge Cutout) */}
          {/* This applies a fixed oval over the face, intersecting with the dynamic multi-layered spotlight tracking the mouse */}
          <motion.img 
            src={sunnyImage} 
            alt="Shanmukh Real" 
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ 
              WebkitMaskImage: dualMask,
              WebkitMaskComposite: 'source-in',
              maskImage: dualMask,
              maskComposite: 'intersect',
              scale: 1.45,
              y: '-18%',
              objectPosition: 'center top'
            }}
            className="absolute inset-x-0 bottom-0 w-full h-full object-cover pointer-events-none"
          />
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-20 left-6 md:bottom-28 md:left-20 z-30 flex flex-col gap-4 pointer-events-auto"
      >
        <div className="flex gap-4 sm:gap-6">
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-2xl border border-gray-500 text-gray-300 hover:bg-white/10 hover:text-white transition-all font-medium text-[15px] text-center w-36"
          >
            Contact
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 rounded-2xl border border-gray-500 text-gray-300 hover:bg-white/10 hover:text-white transition-all font-medium text-[15px] text-center w-36"
          >
            Who I'm
          </a>
        </div>
        
        <a 
          href={cvFile} 
          download="Shanmukh_CV.pdf"
          className="ml-20 w-36 py-3 rounded-2xl border border-gray-500 text-gray-300 hover:bg-white hover:text-black transition-all font-bold text-[15px] text-center flex items-center justify-center gap-2 group/btn"
        >
          <Download size={16} className="group-hover/btn:-translate-y-1 transition-transform" /> CV
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
