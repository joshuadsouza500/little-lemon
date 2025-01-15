import { motion } from 'framer-motion'
import React from 'react'

const reviewsVariant = {
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

export const Reviews = () => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex flex-col justify-center items-center pt-8 md:pt-14 md:pb-20 max-w-xxl 2xl:max-w-xxxl mx-auto "
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
          className="font-alex text-golden text-5xl lg:text-7xl text-center pr-4 pb-2 lg:pb-4 -ml-1"
          variants={reviewsVariant}
        >
          Customer
        </motion.h1>
        <motion.h1
          className="pr-4 font-josefin text-4xl  md:text-5xl lg:text-6xl font-bold text-blackish md:w-[70%] text-center pb-6"
          variants={reviewsVariant}
        >
          Reviews
        </motion.h1>
        <motion.div className="stack" variants={reviewsVariant}>
          <div className="rounded-2xl bg-Dgreen w-[90%] sm:w-[75%] py-6 md:py-10 px-8 font-josefin text-white text-center sm:text-xl text-opacity-90 2xl:w-[60%]">
            <span className="text-golden">
              &#x2605; &#x2605; &#x2605; &#x2605; &#x2605;
            </span>
            <p className="py-4">
              "The Little Lemon Restaurant is a hidden gem that deserves all the
              praise it gets. I will definitely be returning and I highly
              recommend this restaurant to anyone looking for a fantastic dining
              experience."
            </p>
            <h3>Kylie meyer. </h3>
          </div>
          <div className="rounded-2xl bg-greener w-[90%] sm:w-[75%] py-6 md:py-10 px-8 font-josefin text-white text-center sm:text-xl text-opacity-90 2xl:w-[60%]">
            <span className="text-golden">
              &#x2605; &#x2605; &#x2605; &#x2605; &#x2605;
            </span>
            <p className="py-4">
              "The Little Lemon Restaurant is a hidden gem that deserves all the
              praise it gets. I will definitely be returning and I highly
              recommend this restaurant to anyone looking for a fantastic dining
              experience."
            </p>
            <h3>John Lewis. </h3>
          </div>
        </motion.div>
      </motion.div>
      <img
        src="/assets/pepper.png"
        className="size-64 md:size-72 2xl:size-96 absolute -right-32 bottom-10 opacity-15"
      />
    </div>
  )
}
