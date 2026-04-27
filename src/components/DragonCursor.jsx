import React, { useEffect, useRef } from 'react';
import dragonImage from '../assets/dragon.png';

const MIST_PARTS = 70;
const EMBER_PARTS = 70;

const DragonCursor = () => {
  const canvasRef = useRef(null);
  const dragonRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Positions for tracking
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const curPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    let rafId = null;
    let time = 0;
    
    // Idle tracking
    let idleMode = true;
    let idleAngle = 0;
    let idleTimer = null;

    const triggerIdle = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => { idleMode = true; }, 2000);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      idleMode = false;
      triggerIdle();
    };
    window.addEventListener('mousemove', onMove);
    triggerIdle();

    const lerp = (a, b, t) => a + (b - a) * t;

    // --- Particle Systems ---
    let mists = [];
    let embers = [];

    const spawnMist = (x, y) => {
      if (mists.length > MIST_PARTS) mists.shift();
      mists.push({
        x: x + (Math.random() - 0.5) * 80,
        y: y + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8 - 0.3, // slow drift upwards
        life: 0,
        maxLife: 60 + Math.random() * 80,
        r: 30 + Math.random() * 40,
        rot: Math.random() * Math.PI * 2
      });
    };

    const spawnEmber = (x, y) => {
      if (embers.length > EMBER_PARTS) embers.shift();
      embers.push({
        x: x + (Math.random() - 0.5) * 60,
        y: y + (Math.random() - 0.5) * 60,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5 - 1, // drift up
        life: 0,
        maxLife: 30 + Math.random() * 50,
        r: 1 + Math.random() * 3
      });
    };

    const drawParticles = () => {
      // Glow blend mode
      ctx.globalCompositeOperation = 'screen';
      
      // Draw Mist Clouds
      mists.forEach(m => {
        let alpha = Math.sin((m.life / m.maxLife) * Math.PI) * 0.4;
        ctx.save();
        ctx.translate(m.x, m.y);
        ctx.rotate(m.rot);
        let g = ctx.createRadialGradient(0, 0, 0, 0, 0, m.r);
        g.addColorStop(0, `rgba(255, 250, 230, ${alpha})`);
        g.addColorStop(0.5, `rgba(255, 215, 100, ${alpha * 0.4})`);
        g.addColorStop(1, `rgba(255, 255, 255, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, m.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        m.x += m.vx;
        m.y += m.vy;
        m.life++;
      });
      mists = mists.filter(m => m.life < m.maxLife);

      // Draw Floating Embers
      embers.forEach(e => {
        let alpha = 1 - (e.life / e.maxLife);
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 220, 100, ${alpha})`;
        ctx.shadowColor = '#ffaa00';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        e.x += e.vx;
        e.y += e.vy;
        e.life++;
      });
      embers = embers.filter(e => e.life < e.maxLife);
      
      ctx.globalCompositeOperation = 'source-over';
    };

    // --- Main Loop ---
    const animate = (now) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      // Target position
      let tx, ty;
      if (idleMode) {
        // Slow regal wandering pattern when mouse is still
        idleAngle += 0.005;
        tx = canvas.width / 2 + Math.cos(idleAngle) * (canvas.width * 0.3) + Math.sin(idleAngle * 1.3) * 100;
        ty = canvas.height / 2 + Math.sin(idleAngle * 1.7) * (canvas.height * 0.3) + Math.cos(idleAngle * 0.8) * 80;
      } else {
        tx = mouse.x;
        ty = mouse.y;
      }

      // Smooth lerp for tracking point
      curPos.x = lerp(curPos.x, tx, 0.06);
      curPos.y = lerp(curPos.y, ty, 0.06);

      // Apply floating offsets directly to the image element
      if (dragonRef.current) {
        // Add a soft breathing/floating animation to the tracking position
        let swayY = Math.sin(time * 3) * 15;
        let skewAngle = (tx - curPos.x) * 0.01; // lean into movement

        // Center the 250x250 image via translation
        dragonRef.current.style.transform = `translate(${curPos.x}px, ${curPos.y + swayY}px) translate(-50%, -50%) rotate(${skewAngle}deg)`;
      }

      // Emit particles continually behind the dragon sprite
      if (Math.random() < 0.8) spawnMist(curPos.x, curPos.y);
      if (Math.random() < 0.9) spawnEmber(curPos.x, curPos.y);

      // Render the floating particle trails on canvas
      drawParticles();

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <>
      {/* Background Canvas for Particle Glows/Mist */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9980,
        }}
      />
      
      {/* Sprite Follower – Uses "screen" blend mode to make the pure black background magically disappear, 
          leaving only the beautiful painted glowing dragon filtering right onto the portfolio. */}
      <img 
        ref={dragonRef}
        src={dragonImage} 
        alt="Celestial Dragon"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '280px',
          height: '280px',
          objectFit: 'contain',
          pointerEvents: 'none',
          zIndex: 9990,
          mixBlendMode: 'screen',
          willChange: 'transform',
          filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))'
        }}
      />
    </>
  );
};

export default DragonCursor;
