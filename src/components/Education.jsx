import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react'

const educationData = [
  {
    degree: "Bachelor of Technology - Computer Science and Engineering",
    institution: "Lovely Professional University",
    duration: "Aug 2023 - Present",
    location: "Phagwara, Punjab",
    description: "CGPA: 7.96. Focusing on core software engineering principles, modern frameworks, and technologies.",
    icon: <GraduationCap size={24} />
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Narayana Junior College",
    duration: "Apr 2021 - Mar 2023",
    location: "Guntur, Andhra Pradesh",
    description: "Percentage: 97.8%. Completed with an emphasis on Mathematics and Sciences.",
    icon: <BookOpen size={24} />
  },
  {
    degree: "Matriculation (Class X)",
    institution: "Loyola Public School",
    duration: "Apr 2019 - Mar 2020",
    location: "Nallapadu, Andhra Pradesh",
    description: "Percentage: 89.7%. Strong foundation in academics.",
    icon: <BookOpen size={24} />
  }
]

const Education = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  })

  // Animate the height of the line based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="education" ref={containerRef} className="py-32 px-4 max-w-4xl mx-auto relative">
      {/* Background Glow Patches */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-2/3 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="text-center mb-16 space-y-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-500 inline-block drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">Education</h2>
        <p className="text-gray-300 text-lg font-medium drop-shadow-md">My academic journey and qualifications.</p>
      </div>

      <div className="relative space-y-12 md:space-y-24">
        {/* Animated Static Vertical Line Background */}
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white/5 rounded-full z-0 hidden md:block" />
        
        {/* Animated Scroll Progress Line */}
        <motion.div 
          className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] origin-top z-10 hidden md:block"
          style={{ scaleY: lineHeight }}
        />
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group z-20`}
          >
            {/* Pulsing Timeline Icon */}
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/10 bg-[#0a0a0a] shadow-[0_0_15px_rgba(0,0,0,0.5)] shrink-0 
              md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-30 
              group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-500/10 
              transition-all duration-500 text-gray-400 group-hover:text-blue-400">
              {/* Outer Glow Ring on Hover */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">{item.icon}</div>
            </div>

            {/* Content Card with enhanced Glassmorphism & Hover */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] p-8 glass-card rounded-3xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl
              group-hover:border-blue-500/40 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] 
              transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-500 z-0" />
              
              <div className="flex flex-col space-y-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
                    {item.degree}
                  </h3>
                  <h4 className="text-lg text-blue-400/80 font-semibold mt-1">
                    {item.institution}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2 bg-white/5 py-1 px-3 rounded-full border border-white/5">
                    <Calendar size={14} className="text-blue-400" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 py-1 px-3 rounded-full border border-white/5">
                    <MapPin size={14} className="text-purple-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-gray-300/80 text-base leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
