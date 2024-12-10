'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import cap from '../../public/cap.jpeg'
export default function DemoPicture() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="w-full md:w-1/2 aspect-square relative max-w-md mx-auto md:mx-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 to-emerald-400 rounded-3xl transform rotate-3" />
      <div className={`absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden transform -rotate-3 transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}>
        <Image
          src={cap}
          alt="Demo"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  )
}

