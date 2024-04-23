import React from 'react'

import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Discover } from '../components/Discover'
import { Contact } from '../components/Contact'
import { Reviews } from '../components/Reviews'

import { Footer } from '../components/Footer'
import { motion } from 'framer-motion'

export const Home = () => {
  return (
    <motion.main
       initial={{ y: 10 }}
       animate={{ y : 0}}
       exit={{ y: -10,opacity:0 }}
       transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <Hero />
      <About />
      <Discover />
      <Reviews />
      <Contact />
      <Footer />
    </motion.main>
  )
}
