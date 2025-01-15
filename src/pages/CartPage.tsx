import React from 'react'

import { Footer } from '../components/Footer'
import { Cart } from '../components/Cart'
import { motion } from 'framer-motion'

export const CartPage = () => {
  return (
    <motion.div
      className="flex flex-col min-h-screen bg-white"
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
    >
      <Cart />
      <div className="mt-auto">
        <Footer />
      </div>
    </motion.div>
  )
}
