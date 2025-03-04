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
    <div className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row  pt-20 pb-10 lg:pb-20 pr-2 justify-between max-w-xxl 2xl:max-w-xxxl mx-auto ">
        <motion.div
          className="flex flex-col gap-3 ml-8 lg:ml-28 pr-2  md:pr-0 items-start "
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
            className="font-alex text-golden text-6xl lg:text-7xl text-center md:text-left pr-4 max-md:ml-[12%] "
            variants={contactVariant}
          >
            Say Hello
          </motion.h1>
          <motion.h1
            className="pr-4 font-josefin text-4xl md:text-5xl lg:text-6xl font-bold text-blackish  text-center max-md:ml-12  md:text-left pb-6 "
            variants={contactVariant}
          >
            Contact Us
          </motion.h1>
          <motion.div
            className="font-josefin text-blackish font-normal ml-1 flex flex-col gap-4 pb-7"
            variants={contactVariant}
          >
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
              Monday - Friday: 11:00am - 10:00pm
              <br />
              Saturday: 11am - 11pm
              <br />
              Sunday: 11am - 9pm
            </span>
          </motion.div>
          <motion.button
            className="py-2  px-4 text-sm md:text-base bg-golden border-white rounded-sm  hover:bg-[#E4B44E] shadow-md text-white hover:scale-[.98] z-10"
            variants={contactVariant}
          >
            <NavLink to="/reservation">Book a table</NavLink>
          </motion.button>
        </motion.div>
        <div className="p-2 ml-5 mr-1 md:ml-1 mt-10 md:mt-16 max-md:h-72 w-[90%] md:w-[60%] lg:w-[45%] lg:mr-20 rounded-lg overflow-hidden shadow-lg z-10">
          <iframe
            title="Little Lemon Location"
            width="100%"
            height="100%"
            className=" rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.2596831892297!2d-87.6244212!3d41.8867074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca3e2d9b6ef%3A0x4a79c2133bce7648!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
      <img
        src="/assets/bg/radish.png"
        className="size-64 md:size-72  2xl:size-96 absolute -left-24 xl:-left-32 top-[35%]  opacity-15 rotate-45 "
      />
    </div>
  )
}
