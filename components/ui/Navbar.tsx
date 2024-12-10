'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-teal-900/70 backdrop-blur-md' : ''
    }`}>  
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">LOGO</div>
        <div className="space-x-4">
          <Button variant="ghost" className="text-white" asChild>
            <a href="/">Home</a>
          </Button>
          
          <Button variant="ghost" className="text-white">About</Button>
          <Button variant="ghost" className="text-white">Contact</Button>
        </div>
        
      </div>
      <hr/></nav>
  )
}

