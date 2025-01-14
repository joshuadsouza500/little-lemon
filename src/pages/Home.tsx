import React from 'react'

import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Discover } from '../components/Discover'
import { Contact } from '../components/Contact'
import { Reviews } from '../components/Reviews'

import { Footer } from '../components/Footer'
import { motion } from 'framer-motion'
import Booking from '../components/Booking'
import { Carousel } from '../components/Carousel'

export const Home = () => {
  return (
    <motion.main
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      className="bg-white"
    >
      <Carousel />

      <About />
      <Discover />
      {/**      <Hero /><Booking />
      <Reviews />
      <Contact />
      <Footer /> */}
    </motion.main>
  )
}
