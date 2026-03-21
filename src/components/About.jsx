import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import heroImage from '../assets/hero-character.png'
import sunnyImage from '../assets/sunny1.jpeg'
import cvFile from "../assets/General-CV(Sunny')_1774079100.pdf"

const Typewriter = ({ words }) => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    let timer = setTimeout(() => {
      const i = loopNum % words.length
      const fullText = words[i]

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1))
        setTypingSpeed(50)
      } else {
        setText(fullText.substring(0, text.length + 1))
        setTypingSpeed(150)
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(500)
      }
    }, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, words])

  return (
    <span className="text-[#8b5cf6] border-r-[3px] border-[#8b5cf6] pr-1 [text-shadow:0_0_15px_#8b5cf6]" style={{ animation: 'blink 1s step-end infinite' }}>
      {text}
      <style>{`
        @keyframes blink { 
          0%, 100% { border-color: transparent } 
          50% { border-color: #8b5cf6 } 
        }
      `}</style>
    </span>
  )
}

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <section id="about" className="py-32 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-500 inline-block drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">About Me</h2>
        <p className="text-gray-300 text-lg font-medium drop-shadow-md">A little bit about who I am.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* 3D Flip Card */}
        <div 
          className="relative w-full max-w-md aspect-[3/4] perspective-1000 cursor-pointer"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="w-full h-full relative preserve-3d"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Front Side (Anime Character) */}
            <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden glass-card bg-[#1a1a1a] flex items-end justify-center">
              <img 
                src={heroImage} 
                alt="Character Front" 
                className="w-full h-[120%] object-cover object-top opacity-90"
              />
            </div>

            {/* Back Side (Sunny1.jpeg) */}
            <div 
              className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden glass-card rotate-y-180"
            >
              <img 
                src={sunnyImage} 
                alt="Sunny Back" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 text-3xl font-medium text-gray-200">
            <motion.span 
              animate={{ rotate: [0, 20, -10, 20, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
              className="origin-bottom-right inline-block text-4xl"
            >
              👋
            </motion.span>
            Hey
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            I'm Shanmukh Raj
          </h2>
          
          <div className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
            I am into <Typewriter words={['Competitive Programming', 'Full Stack Developer', 'Problem Solver']} />
          </div>

          <p className="text-lg text-white [text-shadow:0_0_8px_rgba(255,255,255,0.4)] leading-relaxed max-w-2xl mt-6">
            I am a <span className="text-[#8b5cf6] [text-shadow:0_0_10px_#8b5cf6] font-semibold">Full-Stack developer</span> based in India. I am an Bachelor of Technology undergraduate from LPU. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build <span className="text-[#8b5cf6] [text-shadow:0_0_10px_#8b5cf6] font-semibold">Full-Stack</span> clones.
          </p>

          <div className="space-y-4 pt-4 text-gray-300 text-lg">
            <p><span className="text-[#4f46e5] font-medium mr-2">Email :</span> shanmukhraj2997@gmail.com</p>
            <p><span className="text-[#4f46e5] font-medium mr-2">Place :</span> Guntur, Andhra Pradesh, India</p>
          </div>

          <div className="pt-8">
            <a 
              href={cvFile}
              download="Shanmukh_CV.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#1e1b4b] hover:bg-[#312e81] text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-[0_0_20px_rgba(79,70,229,0.8)]"
            >
              Resume <span className="text-xl leading-none">›</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
