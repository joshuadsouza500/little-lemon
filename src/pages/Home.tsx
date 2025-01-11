import React from 'react'

import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Discover } from '../components/Discover'
import { Contact } from '../components/Contact'
import { Reviews } from '../components/Reviews'

import { Footer } from '../components/Footer'
import { motion } from 'framer-motion'

export const Home = () => {
  return (
    <motion.main
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
    >
      <Hero />
      <About />
      <Discover />
      <div className="py-12 bg-Dgreen h-auto w-full ">
        <h2 className="text-golden font-semibold text-center text-5xl pb-8">
          Book your Table
        </h2>
        <section className="flex flex-col gap-y-3 gap-x-2 items-center justify-center max-w-4xl mx-auto">
          <div className="flex gap-x-2 w-full">
            {' '}
            <input
              className="border-golden/40 border-[0.5px] py-2 px-1 bg-transparent backdrop-blur-sm text-golden/30 rounded"
              type="date"
              placeholder="Date"
            />
            <input
              className="border-golden/40 border-[0.5px] py-2 px-1 bg-transparent backdrop-blur-sm text-golden/30 rounded"
              type="time"
              placeholder="Time"
            />
          </div>
          <div className="flex gap-x-2 w-full">
            {' '}
            <input
              className="border-golden/40 border-[0.5px] py-2 px-1 bg-transparent backdrop-blur-sm text-golden/30 rounded"
              type="number"
              placeholder="Number of Guests"
            />
            <input
              className="border-golden/40 border-[0.5px] py-2 px-1 bg-transparent backdrop-blur-sm text-golden/30 rounded"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            className="border-golden/40 border-[0.5px] py-8 px-4 bg-transparent backdrop-blur-sm text-golden/30 rounded w-[60%]"
            type="text"
            placeholder="Message"
          />
          <button className="ml-1 btn w-40 md:w-44 text-base bg-golden  rounded-lg  hover:bg-greener  text-white">
            Book Now
          </button>
        </section>
      </div>
      <Reviews />
      <Contact />
      <Footer />
    </motion.main>
  )
}
