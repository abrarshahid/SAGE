'use client'

import { ReactNode } from 'react'

export default function StickyScroll({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-[200vh]">
      <div className="sticky top-24">
        {children}
      </div>
    </div>
  )
}

