import { motion } from 'framer-motion'
import React from 'react'

const aboutVariant = {
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

export const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row pt-20 pb-10 pr-2">
        <motion.div
          className="flex flex-col gap-3 ml-6 md:ml-20 pr-2 md:pr-0 items-center md:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3, delay: 0.2 },
            },
          }}
        >
          <motion.h1
            className="font-alex text-golden text-6xl lg:text-7xl text-center md:text-left pr-4 -ml-8"
            variants={aboutVariant}
          >
            Welcome to
          </motion.h1>
          <motion.h1
            className="pr-4 font-josefin text-4xl md:text-5xl lg:text-6xl font-bold text-blackish md:w-[70%] text-center md:text-left pb-6"
            variants={aboutVariant}
          >
            Little Lemon Restaurant
          </motion.h1>
          <motion.p
            className="font-josefin text-justify text-blackish w-[95%] text-lg md:w-[80%] pb-4"
            variants={aboutVariant}
          >
            We are a family-owned Mediterranean Restaurant focused on
            traditional recipes served with a modern twist. Indulge in a
            culinary journey that captures the essence of our family's heritage,
            where every bite is a celebration of tradition and innovation.
          </motion.p>
          <motion.a
            href="/about"
            className="-ml-4 sm:ml-0 text-lg text-golden font-josefin w-[125px] border-b border-golden hover:text-greener hover:border-greener"
            variants={aboutVariant}
          >
            Meet the team
          </motion.a>
        </motion.div>
        <div className="px-8 pt-14 md:pt-1">
          <motion.img
            src="/assets/ABout.jpg"
            width={2000}
            alt="Restaurant image"
            initial={{ filter: 'blur(4px)' }}
            whileInView={{ filter: 'blur(0px)' }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </>
  )
}
