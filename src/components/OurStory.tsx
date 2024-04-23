import React from 'react'
import { motion } from 'framer-motion'

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
export const OurStory = () => {
  return (
    <>
      <div className="pb-4 md:pb-10 pt-5">
        <motion.div
          className="pt-20 md:pt-24 text-center"
          initial="hidden"
          whileInView="visible"
        >
          <motion.h1
            className="font-alex text-golden text-6xl lg:text-7xl text-center pb-1 pr-4"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h1>
        </motion.div>

        <div className="flex flex-col md:flex-row mt-2 md:mt-10 flex-auto">
          <motion.div
            className="flex flex-col gap-3 ml-4 md:ml-20 pr-2  md:pr-0 items-center md:items-start  lg:w-[70%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2, delay: 0.3 },
              },
            }}
          >
            <motion.h1
              className="pr-4 font-josefin text-4xl md:text-5xl lg:text-6xl font-bold text-blackish md:w-[70%] text-center md:text-left pb-6 "
              variants={aboutVariant}
            >
              Our Story
            </motion.h1>
            <motion.span
              className="font-josefin text-justify text-blackish w-[95%] text-lg md:text-base lg:text-lg md:w-[85%] pb-4 "
              variants={aboutVariant}
            >
              Nestled in the heart of California, Little Lemon is a restaurant
              that holds a special place in the community. Founded by our family
              50 years ago, our restaurant has been a cherished gathering spot
              for those seeking the flavours of traditional Mediterranean
              cuisine.<br></br>As a family-owned business, every dish that
              leaves our kitchen carries with it the warmth and charm of our
              heritage. Our commitment to preserving the authenticity of
              traditional Mediterranean flavours is at the heart of everything
              we do, ensuring that each bite evokes memories of home-cooked
              meals and shared moments around the table.
            </motion.span>
          </motion.div>
          <div className="md:pr-10 md:pt-10 flex justify-center p-5 md:flex-none md:w-1/2 md:h-96">
            <motion.img
              src="/assets/seating2new.jpg"
              width={500}
              initial={{ filter: 'blur(4px)' }}
              whileInView={{ filter: 'blur(0px)' }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            ></motion.img>
          </div>
        </div>
      </div>
    </>
  )
}
