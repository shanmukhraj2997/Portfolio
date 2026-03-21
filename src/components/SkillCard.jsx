import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ category, items, idx }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative w-full rounded-[2rem] p-[1px] overflow-hidden group"
    >
      {/* Glow Follow Effect */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.4), transparent 40%)`,
        }}
      />
      
      {/* Card Content Background */}
      <div className="relative h-full bg-black/60 backdrop-blur-xl rounded-[2rem] p-8 space-y-6 border border-white/10 group-hover:border-blue-500/20 transition-colors duration-500 z-10 flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <h3 className="text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-blue-400 transition-colors drop-shadow-md">
          {category}
        </h3>
        
        <div className="flex flex-wrap gap-3">
          {items.map(skill => (
            <div 
              key={skill.name}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-full hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80 group-hover:bg-blue-400 transition-colors shadow-[0_0_5px_rgba(59,130,246,0.8)]" />
              <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
