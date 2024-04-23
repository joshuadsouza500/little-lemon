import React from 'react'

import { Footer } from '../components/Footer'
import { OurStory } from '../components/OurStory'
import { OurTeam } from '../components/OurTeam'
import { motion } from 'framer-motion'

export const AboutTeam = () => {
  return (
    <motion.main
       initial={{ y: 10 }}
       animate={{ y : 0}}
       exit={{ y: -10,opacity:0 }}
       transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
    
      <OurStory />
      <OurTeam />
      <Footer />
    </motion.main>
  )
}
