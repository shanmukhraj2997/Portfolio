import React, { useState } from 'react'
import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Languages',
    icon: '</>',
    iconColor: '#60a5fa',
    skills: [
      { name: 'C',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',                          bg: null },
      { name: 'C++',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',           bg: null },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',        bg: null },
      { name: 'PHP',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',                      bg: null },
      { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',                bg: null },
    ]
  },
  {
    title: 'Web Technologies',
    icon: '🌐',
    iconColor: '#34d399',
    skills: [
      { name: 'HTML',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',                 bg: null },
      { name: 'CSS',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',                   bg: null },
      { name: 'Tailwind CSS',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',     bg: null },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚡',
    iconColor: '#a78bfa',
    skills: [
      { name: 'React',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',                    bg: null },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',                  bg: null },
      // Django plain icon is dark-green — supply a white bg pill so it pops
      { name: 'Django',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',                     bg: '#0c4b33', invert: false },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',                bg: null },
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    iconColor: '#fb923c',
    skills: [
      { name: 'GitHub',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',                bg: '#fff',    invert: false, iconFilter: 'none', iconBg: '#ffffff', iconRadius: '50%' },
      { name: 'VS Code',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',                bg: null },
      { name: 'MongoDB',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',              bg: null },
      // MySQL original SVG is mostly dark on dark — use the wordmark-plain which is clearly coloured
      { name: 'MySQL',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',         bg: null, lightBg: true },
      { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',             bg: null, invert: true },
    ]
  },
]

// Shimmer animation keyframes injected once
const shimmerCSS = `
@keyframes shimmerSlide {
  0%   { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(250%)  skewX(-15deg); }
}
@keyframes floatUp {
  0%, 100% { transform: translateY(0px);  }
  50%       { transform: translateY(-6px); }
}
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 0px rgba(96,165,250,0); }
  50%       { box-shadow: 0 0 16px 4px rgba(96,165,250,0.35); }
}
`

const SkillChip = ({ skill, delay, accentColor }) => {
  const [hovered, setHovered] = useState(false)

  // For GitHub we need a dark icon on a white circle bg
  const needsLightBg = skill.name === 'GitHub'
  const needsInvert  = skill.invert === true

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.88 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl border select-none overflow-hidden"
      style={{
        background: hovered ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.045)',
        borderColor: hovered ? `${accentColor}60` : 'rgba(255,255,255,0.09)',
        boxShadow: hovered ? `0 0 20px ${accentColor}30, 0 4px 16px rgba(0,0,0,0.3)` : '0 2px 8px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-3px) scale(1.04)' : 'translateY(0) scale(1)',
        transition: 'all 0.28s cubic-bezier(0.23,1,0.32,1)',
        animation: hovered ? 'glowPulse 1.4s ease-in-out infinite' : 'none',
      }}
    >
      {/* Shimmer sweep on hover */}
      {hovered && (
        <span
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)',
            width: '60%',
            animation: 'shimmerSlide 0.7s ease forwards',
          }}
        />
      )}

      {/* Skill Icon */}
      <span
        className="flex items-center justify-center rounded-md flex-shrink-0"
        style={{
          width: 26,
          height: 26,
          background: needsLightBg ? '#ffffff' : (skill.bg || 'transparent'),
          padding: needsLightBg ? '3px' : skill.bg ? '2px' : 0,
          borderRadius: needsLightBg ? '50%' : skill.bg ? '5px' : 0,
        }}
      >
        <img
          src={skill.icon}
          alt={skill.name}
          className="object-contain"
          style={{
            width: needsLightBg ? 18 : skill.bg ? 20 : 24,
            height: needsLightBg ? 18 : skill.bg ? 20 : 24,
            filter: needsInvert ? 'invert(1)' : 'none',
            // MySQL wordmark has colours — show as-is but ensure contrast
            opacity: skill.lightBg ? undefined : 1,
          }}
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </span>

      <span
        className="text-sm font-semibold tracking-wide"
        style={{
          color: hovered ? '#fff' : 'rgba(220,220,240,0.9)',
          transition: 'color 0.2s',
          textShadow: hovered ? `0 0 8px ${accentColor}80` : 'none',
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  )
}

const CategorySection = ({ category, catIdx }) => {
  const [cardHovered, setCardHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: catIdx * 0.12, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, margin: '-30px' }}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      className="relative rounded-2xl p-6 md:p-8 border overflow-hidden"
      style={{
        background: cardHovered
          ? 'rgba(15,15,28,0.72)'
          : 'rgba(10,10,20,0.55)',
        backdropFilter: 'blur(18px)',
        borderColor: cardHovered ? `${category.iconColor}35` : 'rgba(255,255,255,0.065)',
        boxShadow: cardHovered
          ? `0 0 40px ${category.iconColor}18, 0 8px 32px rgba(0,0,0,0.45)`
          : '0 4px 20px rgba(0,0,0,0.35)',
        transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
        animation: `floatUp ${4 + catIdx * 0.5}s ease-in-out infinite`,
        animationDelay: `${catIdx * 0.3}s`,
      }}
    >
      {/* Gradient blob top-right */}
      <div
        className="absolute -top-12 -right-12 w-52 h-52 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${category.iconColor}28 0%, transparent 68%)`,
          transition: 'opacity 0.4s',
          opacity: cardHovered ? 1 : 0.6,
        }}
      />
      {/* Gradient blob bottom-left */}
      <div
        className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${category.iconColor}14 0%, transparent 70%)`,
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5 relative z-10">
        <motion.span
          animate={cardHovered ? { rotate: [0, -8, 8, -4, 0], scale: [1, 1.15, 1] } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center w-10 h-10 rounded-xl text-lg font-bold select-none flex-shrink-0"
          style={{
            background: `${category.iconColor}20`,
            color: category.iconColor,
            border: `1px solid ${category.iconColor}45`,
            boxShadow: cardHovered ? `0 0 14px ${category.iconColor}50` : 'none',
            transition: 'box-shadow 0.3s',
          }}
        >
          {category.icon}
        </motion.span>
        <h3
          className="text-[17px] font-bold tracking-tight"
          style={{
            color: cardHovered ? '#fff' : 'rgba(255,255,255,0.88)',
            textShadow: cardHovered ? `0 0 12px ${category.iconColor}60` : 'none',
            transition: 'all 0.3s',
          }}
        >
          {category.title}
        </h3>
      </div>

      {/* Divider */}
      <div
        className="h-px mb-5 relative z-10 rounded-full"
        style={{
          background: cardHovered
            ? `linear-gradient(90deg, ${category.iconColor}50, transparent)`
            : 'rgba(255,255,255,0.06)',
          transition: 'background 0.4s',
        }}
      />

      {/* Skill Chips */}
      <div className="flex flex-wrap gap-2.5 relative z-10">
        {category.skills.map((skill, i) => (
          <SkillChip
            key={skill.name}
            skill={skill}
            delay={catIdx * 0.08 + i * 0.06}
            accentColor={category.iconColor}
          />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 px-4 overflow-hidden">
      <style>{shimmerCSS}</style>

      {/* Background ambient glows */}
      <div className="absolute top-24 left-1/4 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #60a5fa 0%, transparent 65%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 65%)', filter: 'blur(50px)' }} />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Heading */}
        <div className="text-center mb-14 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-500 inline-block drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            Skills &amp; Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-400 text-lg max-w-xl mx-auto"
          >
            Technologies and tools I work with.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <CategorySection key={cat.title} category={cat} catIdx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
