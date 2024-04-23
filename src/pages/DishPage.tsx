import React from 'react'

import { Footer } from '../components/Footer'
import { Dish } from '../components/Dish'
import { Recommended } from '../components/Recommended'
import { menuData } from '../components/items'
import { motion } from 'framer-motion'

export const DishPage = () => {
  return (
    <motion.main
      initial={{ y: 10 }}
      animate={{ y : 0}}
      exit={{ y: -10,opacity:0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <Dish menuItems={menuData} />
      <Recommended menuItems={menuData} />
      <Footer />
    </motion.main>
  )
}
