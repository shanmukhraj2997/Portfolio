import React from 'react'
import SkillCard from './SkillCard'

const categorizedSkills = {
  'Languages': [
    { name: "C" },
    { name: "C++" },
    { name: "JAVASCRIPT" },
    { name: "PHP" },
    { name: "PYTHON" }
  ],
  'Web Tech': [
    { name: "HTML" },
    { name: "CSS" },
    { name: "TAILWIND CSS" }
  ],
  'Frameworks & Libs': [
    { name: "REACT" },
    { name: "NODE.JS" },
    { name: "DJANGO" },
    { name: "LARAVEL" }
  ],
  'Tools & Platforms': [
    { name: "GitHub" },
    { name: "VS Code" },
    { name: "MongoDB" },
    { name: "MySQL" },
    { name: "WordPress" }
  ],
  'Soft Skills': [
    { name: "Problem-Solving" },
    { name: "Adaptability" },
    { name: "Communication" },
    { name: "Team Collaboration" }
  ]
}

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 px-4 min-h-[90vh] flex items-center overflow-hidden">
      {/* Container for content */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-16 lg:mb-20 px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-500 inline-block drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            Skills & Expertise
          </h2>
          <p className="mt-4 mx-auto text-gray-300 max-w-2xl text-lg font-medium drop-shadow-md">
            A comprehensive overview of my technical proficiencies, tools, and the professional skills I bring to the table.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-2 relative z-20">
          {Object.entries(categorizedSkills).map(([category, items], idx) => (
            <SkillCard
              key={category}
              category={category}
              items={items}
              idx={idx}
            />
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Skills
