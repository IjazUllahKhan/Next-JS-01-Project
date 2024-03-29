import HeroSection from '@/components/HeroSection'
import React from 'react'

export default function Home() {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <h1 className='text-3xl text-center text-white'>SuperMan</h1>
      <HeroSection/>
    </main>    
  )
}
