import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { BadgeInfoIcon, Info, InfoIcon } from 'lucide-react'

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

export const OurTeam = () => {
  type Worker = {
    id: number
    name: string
    position: string
    image: string
    description: string
  }

  const workers: Worker[] = [
    {
      id: 1,
      name: 'Steven Lucre',
      position: 'Head Chef',
      image: '/assets/chef2.png',
      description:
        'Steven has over 15 years of experience in fine dining and has worked in several Michelin-starred restaurants.',
    },
    {
      id: 2,
      name: 'Melissa Sue',
      position: 'Sous Chef',
      image: '/assets/Chef8.png',
      description:
        'Melissa specializes in pastry and has a passion for creating desserts that are as beautiful as they are delicious.',
    },
    {
      id: 3,
      name: 'Mark Wright',
      position: 'Sous Chef',
      image: '/assets/Chef7.png',
      description:
        'Mark brings a fusion of flavors from his travels around the world and has a wealth of culinary knowledge.',
    },
    {
      id: 4,
      name: 'Alex Jones',
      position: 'Pastry Chef',
      image: '/assets/Chef10.png',
      description:
        'With over 12 years of experience in the pastry arts, Alex specializes in creating exquisite desserts that have innovative flavors',
    },
  ]
  const [selectedWorker, setSelectedWorker] = useState<number | null>(null)

  const ToggleWorker = (id: number) => {
    setSelectedWorker(selectedWorker == id ? null : id)
  }
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse mt-20 mb-10 md:pb-16 pr-1 justify-between max-w-xxl 2xl:max-w-xxxl mx-auto">
        <motion.div
          className="flex flex-col gap-3 ml-4 md:pl-10  items-center md:items-baseline md:w-[50%]"
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
            className="pr-4 font-josefin text-4xl md:text-5xl lg:text-6xl font-bold text-blackish  text-center md:text-left pb-6"
            variants={aboutVariant}
          >
            Meet The Team
          </motion.h1>
          <motion.p
            className="font-josefin text-justify text-blackish text-lg w-[95%] md:w-[80%] pb-4 mr-2
           "
            variants={aboutVariant}
          >
            Our team of talented chefs pour their passion and expertise into
            crafting each dish with precision and care. With a dedication to
            preserving the authenticity of traditional cuisine, our chefs infuse
            every creation with the flavours of our heritage, ensuring that
            every bite is a delightful journey for the taste buds.
          </motion.p>
          <motion.button
            className="btn w-40 md:w-44 text-base bg-golden  rounded-lg  hover:bg-greener  text-white"
            variants={aboutVariant}
          >
            <NavLink to="/reservation">Book a table</NavLink>
          </motion.button>
        </motion.div>
        <div className="pt-14 md:pt-1 pr-1 flex justify-center md:flex-none md:w-2/4 ">
          <div className="carousel carousel-center max-w-md lg:max-w-lg 2xl:max-w-xl p-4 space-x-4  items-center ">
            {workers.map((worker) => (
              <div
                key={worker.name}
                className="carousel-item w-1/2 cursor-pointer relative overflow-hidden group rounded-xl"
                onClick={() => ToggleWorker(worker.id)}
              >
                <div
                  className={`absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-300 flex items-center justify-center p-2 z-10 rounded-2xl ${
                    selectedWorker === worker.id
                      ? 'opacity-100'
                      : 'group-hover:opacity-40'
                  }`}
                >
                  {selectedWorker === worker.id && (
                    <span className="flex flex-col  items-center gap-y-2">
                      <Info className="bg-gray-200" />
                      <p className="text-white max-md:text-sm text-balance font-medium text-center animate-fade-in">
                        {worker.description}
                      </p>
                    </span>
                  )}
                </div>
                <div className="card bg-zinc-800 shadow-md">
                  <figure>
                    <img
                      src={worker.image}
                      alt={worker.name}
                      className="aspect-square mt-2 object-fill"
                    />
                  </figure>
                  <div className="p-3 gap-0 bg-white/95 text-blackish font-josefin text-center rounded-b-xl ">
                    <h2 className="md:text-lg font-semibold">{worker.name}</h2>
                    <p className="text-golden">{worker.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
