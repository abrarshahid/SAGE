import React from 'react';
import RetroGrid from '../components/ui/RetroGrid'
import IntroText from '../components/ui/IntroText'
import DemoPicture from '../components/ui/DemoPicture'
import Navbar from '../components/ui/Navbar'
import WhatIsSage from '../components/ui/WhatIsSage'
import SageByNumbers from '../components/ui/SageByNumbers'
import { DockDemo } from '../components/ui/dockuse'




export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-teal-900">
      <RetroGrid />
      <div className="fixed bottom-0 z-50 w-full p-4 mb-4">
  <DockDemo />
</div>


      <div className="container mx-auto px-4 flex flex-col items-center justify-between relative z-10">
        <section className="flex flex-col md:flex-row items-center justify-between min-h-screen w-full">
          <IntroText />
          <DemoPicture />
        </section>
        
        <WhatIsSage />
        <SageByNumbers />
      </div>
    </main>
  )
}

