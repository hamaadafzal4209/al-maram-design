import WhoWeAre from '@/components/AboutUs'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import VoltageElectricitySlider from '@/components/Products'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhoWeAre/>
      <VoltageElectricitySlider/>
    </div>
  )
}

export default page
