import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const headingVariant = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      type: 'spring',
    },
  },
}
export const Hero = () => {
  return (
    <>
      <div
        id="top"
        className=" bg-cover bg-no-repeat bg-center w-full h-dvh md:h-[90vh] bg-[url('/assets/bgv.jpg')] md:bg-[url('/assets/bgmain.jpg')] "
      >
        <div className="inset-0 bg-black bg-opacity-50 h-dvh ">
          <motion.div
            className=" mx-2 md:ml-10 pr-2 pt-40 flex flex-col gap-4  md:w-2/4 items-center xl:pt-52 font-josefin max-w-xxl 2xl:max-w-xxxl"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            <motion.h1
              className="font-Heading text-6xl md:text-7xl lg:text-8xl text-white text-center "
              variants={headingVariant}
            >
              A Taste of Perfection
            </motion.h1>
            <motion.div className="flex gap-2 mx-5" variants={headingVariant}>
              <button className="btn w-36 md:w-52 text-base md:text-lg bg-greener border-white rounded-lg  hover:bg-transparent hover:backdrop-blur-sm text-white">
                <NavLink to="/reservation">Book a table</NavLink>
              </button>
              <button className="btn w-36 md:w-52 text-base md:text-lg btn-ghost border-white rounded-lg hover:bg-greener hover:border-white text-white backdrop-blur-sm">
                <NavLink to="/cart">Order Online</NavLink>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
