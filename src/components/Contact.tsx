import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const contactVariant = {
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
export const Contact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row  pt-20 pb-10 pr-2 justify-between max-w-xxl 2xl:max-w-xxxl mx-auto">
        <motion.div
          className="flex flex-col gap-3 ml-8 md:ml-28 pr-2  md:pr-0 items-start"
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
            className="font-alex text-golden text-6xl lg:text-7xl text-center md:text-left pr-4 ml-[12%] "
            variants={contactVariant}
          >
            Say Hello
          </motion.h1>
          <motion.h1
            className="pr-4 font-josefin text-4xl md:text-5xl lg:text-6xl font-bold text-blackish  text-center ml-8 md:text-left pb-6 "
            variants={contactVariant}
          >
            Contact Us
          </motion.h1>
          <motion.div
            className="font-josefin text-blackish font-normal ml-1 flex flex-col gap-4 pb-7"
            variants={contactVariant}
          >
            <span>
              <span className="font-bold text-lg -ml-1">Call Us:</span>
              <br />
              (415) 123-4567
              <br />
              (415) 453-6724
              <br />
            </span>
            <span>
              <span className="font-bold text-lg -ml-1">Location:</span> <br />
              Moxhe 118a Macpherson Street Bronte,
              <br /> Chicago 2024
              <br />
            </span>
            <span>
              <span className="font-bold text-lg -ml-1">
                Hours of Operation:
              </span>
              <br />
              Sunday: Closed
              <br />
              Monday: Closed
              <br />
              Tuesday - Saturday: 9:00 am - 6:00 pm
            </span>
          </motion.div>
          <motion.button
            className="ml-1 btn w-40 md:w-44 text-base bg-golden  rounded-lg  hover:bg-greener  text-white"
            variants={contactVariant}
          >
            <NavLink to="/reservation">Book a table</NavLink>
          </motion.button>
        </motion.div>
        <div className="px-2 ml-5 mr-1 md:ml-1 pt-14 md:pt-24 w-[90%] md:w-[60%] lg:w-[45%] lg:mr-20">
          <motion.img
            src="/assets/map.png"
            className="rounded-2xl"
            initial={{ filter: 'blur(4px)' }}
            whileInView={{ filter: 'blur(0px)' }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          ></motion.img>
        </div>
      </div>
    </>
  )
}
