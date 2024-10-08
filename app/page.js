import WhoWeAre from '@/components/AboutUs'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import VoltageElectricitySlider from '@/components/Products'
import Service from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhoWeAre/>
      <VoltageElectricitySlider/>
      <Service/>
    </div>
  )
}

export default page
