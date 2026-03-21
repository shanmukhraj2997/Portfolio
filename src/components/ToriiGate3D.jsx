import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment } from '@react-three/drei'

// A procedural 3D Torii Gate made from simple geometric shapes
const ToriiGroup = () => {
  const groupRef = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Subtle interactive parallax based on mouse
  useFrame(() => {
    if (groupRef.current) {
      // Rotate the gate slightly toward the mouse smoothly
      groupRef.current.rotation.x += (mouse.current.y * 0.15 - groupRef.current.rotation.x) * 0.1
      groupRef.current.rotation.y += (mouse.current.x * 0.3 - groupRef.current.rotation.y) * 0.1
    }
  })

  // Reusable Material Component
  const ToriiMaterial = () => (
    <meshStandardMaterial 
      color="#cc1111" 
      emissive="#aa0000"
      emissiveIntensity={0.5}
      roughness={0.2}
      metalness={0.1}
    />
  )

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Left Pillar */}
        <mesh position={[-2, 2, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 6, 32]} />
          <ToriiMaterial />
        </mesh>
        
        {/* Right Pillar */}
        <mesh position={[2, 2, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 6, 32]} />
          <ToriiMaterial />
        </mesh>

        {/* Top Main Crossbeam (Kasagi) */}
        <mesh position={[0, 4.8, 0]}>
          <boxGeometry args={[6, 0.6, 0.8]} />
          <ToriiMaterial />
        </mesh>

        {/* Top Accent Crossbeam (Shimaki) - slightly shorter */}
        <mesh position={[0, 4.2, 0]}>
          <boxGeometry args={[5.5, 0.4, 0.6]} />
          <ToriiMaterial />
        </mesh>

        {/* Secondary Lower Crossbeam (Nuki) */}
        <mesh position={[0, 2.5, 0]}>
          <boxGeometry args={[5, 0.3, 0.4]} />
          <ToriiMaterial />
        </mesh>

        {/* Center Support Block (Gaku) */}
        <mesh position={[0, 3.35, 0]}>
          <boxGeometry args={[0.8, 1.2, 0.5]} />
          <meshStandardMaterial color="#111111" roughness={0.8} />
        </mesh>
      </Float>
    </group>
  )
}

const ToriiGate3D = () => {
  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <spotLight position={[-10, 10, -10]} intensity={2} color="#ff3333" />
        <ToriiGroup />
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}

export default ToriiGate3D
