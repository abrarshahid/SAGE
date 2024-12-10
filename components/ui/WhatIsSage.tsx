'use client'

import { motion } from 'framer-motion'

const flowchartItems = [
  { title: "Predict", description: "Analyze data to forecast future trends" },
  { title: "Learn", description: "Continuously improve from new information" },
  { title: "Adapt", description: "Adjust strategies based on predictions" },
  { title: "Optimize", description: "Enhance decision-making processes" },
]

export default function WhatIsSage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-16">
      <h2 className="text-5xl md:text-6xl font-black text-white mb-12 text-center shadow-text">
        What is SAGE?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {flowchartItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-6 shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-teal-600 mb-2">{item.title}</h3>
            <p className="text-teal-800">{item.description}</p>
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full border-4 border-teal-400 rounded-lg animate-pulse" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

