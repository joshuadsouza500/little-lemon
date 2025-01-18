import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const discoverVariant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: 'spring',
    },
  },
}

export const Discover = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse pt-16 2xl:pt-24 pb-10 lg:pb-16 pr-2 max-w-6xl xl:max-w-xxl 2xl:max-w-xxxl mx-auto   lg:px-4">
      <motion.div
        className="flex flex-col gap-1  lg:gap-3 ml-2 mr-2 lg:ml-8 xl:ml-12 lg:pr-0 items-center lg:items-baseline lg:w-1/2 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2, delay: 0.2 },
          },
        }}
      >
        <motion.h1
          className="font-alex text-golden text-5xl lg:text-7xl text-center pr-4"
          variants={discoverVariant}
        >
          Discover
        </motion.h1>
        <motion.h1
          className="pr-4 font-josefin text-4xl md:text-5xl lg:text-6xl font-bold text-blackish lg:w-[90%] text-center lg:text-left pb-6"
          variants={discoverVariant}
        >
          Our Menu
        </motion.h1>
        <motion.p
          className="font-josefin text-justify text-blackish text-lg  md:w-[80%] pb-4 max-md:ml-2"
          variants={discoverVariant}
        >
          Savor the flavors of the Mediterranean with our thoughtfully crafted
          dishes that showcase the best of both old-world charm and contemporary
          creativity. Our menu is a delicious exploration of traditional roots,
          come taste the difference today.
        </motion.p>
        <motion.button
          className="-ml-4 sm:ml-0 text-lg text-golden font-josefin w-[165px] border-b border-golden hover:text-greener hover:border-greener"
          variants={discoverVariant}
        >
          <NavLink to="/menu">View Our Full Menu</NavLink>
        </motion.button>
      </motion.div>

      <div className="w-full lg:w-1/2 px-2 md:px-6 pt-14 md:pt-1 ">
        <motion.img
          src="/assets/Menu.jpeg"
          width={400}
          className="rounded-md h-64 sm:h-80 lg:h-96 2xl:h-[420px] shadow-md w-full object-cover"
          alt="Restaurant image"
          initial={{ filter: 'blur(4px)' }}
          whileInView={{ filter: 'blur(0px)' }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}
