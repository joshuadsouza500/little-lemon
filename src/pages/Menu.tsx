import React from 'react'

import { Footer } from '../components/Footer'
import { FullMenu } from '../components/FullMenu'
import { menuData } from '../components/items'
import { motion } from 'framer-motion'

export const Menu = () => {
  return (
    <motion.main
       initial={{ y: 10 }}
       animate={{ y : 0}}
       exit={{ y: -10,opacity:0 }}
       transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <FullMenu menuItems={menuData} />
      <Footer />
    </motion.main>
  )
}
