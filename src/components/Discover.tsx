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
    <>
      <div className="flex flex-col md:flex-row-reverse pt-20 pb-10 md:pb-16 md:gap-32  pr-2 max-w-xxl 2xl:max-w-xxxl mx-auto ">
        <motion.div
          className="flex flex-col gap-2 md:gap-3 ml-4 mr-2 md:pl-16   md:pr-0 items-center md:items-baseline lg:w-[50%]"
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
            className="pr-4 font-josefin text-4xl md:text-5xl lg:text-6xl font-bold text-blackish md:w-[90%] text-center md:text-left pb-6"
            variants={discoverVariant}
          >
            Our Menu
          </motion.h1>
          <motion.p
            className="font-josefin text-justify text-blackish text-lg w-[95%] md:w-[80%] pb-4"
            variants={discoverVariant}
          >
            Savor the flavors of the Mediterranean with our thoughtfully crafted
            dishes that showcase the best of both old-world charm and
            contemporary creativity. Our menu is a delicious exploration of
            traditiona roots, come taste the difference today.
          </motion.p>
          <motion.button
            className="-ml-4 sm:ml-0 text-lg text-golden font-josefin w-[165px]  border-b border-golden hover:text-greener hover:border-greener"
            variants={discoverVariant}
          >
            <NavLink to="/menu">View Our Full Menu</NavLink>
          </motion.button>
        </motion.div>

        <div className=" py-2 self-center md:self-auto mt-6 md:mt-2  w-mid xl:w-[400px] ml-2 bg-greener rounded-2xl shadow-2xl px-2">
          <img src="/assets/Menu.jpeg" className="h-full w-full " />
        </div>
      </div>
    </>
  )
}
