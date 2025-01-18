import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const menuVariant = {
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

interface props {
  id: number
  img?: string
  title: string
  para: string
  ing: string
  price: number
}

export const FullMenu = ({ menuItems }) => {
  const navigate = useNavigate()

  return (
    <main className="bg-white relative overflow-hidden">
      <img
        src="/assets/bg/radish.png"
        className="size-60 md:size-72 2xl:size-96 absolute -right-32 lg:-right-32 top-36 md:top-36 opacity-15 "
      />
      <img
        src="/assets/bg/Brock.png"
        className="size-60 md:size-72 2xl:size-96 absolute -left-28 2xl:-left-32 top-[25%] opacity-10 rotate-45"
      />
      <img
        src="/assets/bg/Leave.png"
        className="size-60 md:size-72 2xl:size-96 absolute -right-28 2xl:-right-32 top-[45%] opacity-10 -rotate-12"
      />
      <img
        src="/assets/bg/eggplant.png"
        className="size-60 md:size-72 2xl:size-96 absolute -left-28 2xl:-left-32 top-[63%] opacity-10 rotate-180"
      />
      <img
        src="/assets/bg/pepper.png"
        className="size-60 md:size-72 2xl:size-96 absolute -right-28 lg:-right-32 top-[75%] opacity-10 rotate-45"
      />

      <div className="pt-20 md:pt-28 ">
        <motion.h1
          className="font-alex text-golden text-6xl lg:text-7xl text-center pb-6 pr-4"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Menu
        </motion.h1>
      </div>
      <div className="p-4 bg-greener bg-opacity-90 mb-5 md:mb-10">
        <ul className="flex justify-around text-white font-josefin text-base md:text-lg scroll-smooth gap-4">
          <li className="hover:scale-105 hover:text-golden scroll-smooth">
            <a href="#specials">Specials</a>
          </li>
          <li className="hover:scale-105 hover:text-golden">
            <a href="#starters">Starters</a>
          </li>
          <li className="hover:scale-105 hover:text-golden">
            <a href="#mains">Mains</a>
          </li>
          <li className="hover:scale-105 hover:text-golden">
            <a href="#desserts">Desserts</a>
          </li>
          <li className="hover:scale-105 hover:text-golden">
            <a href="#drinks">Drinks</a>
          </li>
        </ul>
      </div>
      <section className="  max-w-xxl 2xl:max-w-xxxl mx-auto">
        <div id="specials" className="px-1 py-5">
          <motion.h1
            className="font-josefin text-golden text-5xl lg:text-6xl text-start ml-4 md:ml-20 pb-6 pr-2 font-semibold"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Weekly Specials
          </motion.h1>
        </div>

        <div className=" text-blackish font-josefin  ">
          <motion.div
            className="grid  md:grid-cols-2 gap-5 md:gap-8 mx-2 md:ml-14 lg:ml-20 "
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
            {menuItems.slice(0, 3).map((item: props) => (
              <motion.div
                className="max-md:mx-auto  card card-side bg-white shadow-xl max-w-[375px] lg:max-w-zz  hover:scale-[1.005] "
                variants={menuVariant}
                key={item.id}
                onClick={() => {
                  const path = `/${item.id}`
                  navigate(path)
                }}
              >
                <div className="bg-greener rounded-lg self-center py-4">
                  <figure className="">
                    <img src={item.img} alt="food" className="p-1" />
                  </figure>
                </div>
                <div className="pl-2 self-center">
                  <h2 className="card-title p-2">{item.title}</h2>
                  <p className="pl-2 text-sm pb-3  text-blackish/90 leading-none md:leading-tight w-[93%]">
                    {item.para}
                  </p>
                  <div className="grid  grid-cols-2 sm:place-items-start mr-3 mb-2 items-center">
                    <h6 className="text-golden text-base md:text-lg font-bold pl-2 ">
                      ${item.price}
                    </h6>
                    <button
                      className="px-0.5 max-md:max-w-24 pt-1  md:px-2 md:py-1 max-md:text-sm rounded-md hover:scale-[.98]  bg-golden hover:bg-greener  text-white  "
                      onClick={() => {
                        const path = `/${item.id}`
                        navigate(path)
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div id="starters" className="p-8 mt-4 md:mt-8">
          <motion.h1
            className="font-semibold font-josefin text-golden text-5xl lg:text-6xl text-start ml-10 md:ml-20 pb-6 pr-4"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Starters
          </motion.h1>
        </div>
        <div className=" text-blackish font-josefin">
          <motion.div
            className="grid  md:grid-cols-2 gap-5 md:gap-8 mx-2 md:ml-14 lg:ml-20"
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
            {menuItems.slice(6, 9).map((item: props) => (
              <motion.div
                className="card card-side bg-white shadow-xl max-w-[375px] max-md:mx-auto lg:max-w-zz  hover:scale-[1.005] "
                key={item.id}
                variants={menuVariant}
                onClick={() => {
                  const path = `/${item.id}`
                  navigate(path)
                }}
              >
                <div className="bg-greener rounded-lg self-center py-5">
                  <figure className="">
                    <img src={item.img} alt="food" className="p-1" />
                  </figure>
                </div>
                <div className="pl-2 self-center">
                  <h2 className="card-title p-2">{item.title}</h2>
                  <p className=" pl-2 text-sm pb-2 font-normal leading-none w-[93%]">
                    {item.para}
                  </p>
                  <div className="grid  grid-cols-2 sm:place-items-start mr-3 mb-2 pt-1 items-center">
                    <h6 className="text-golden text-base md:text-lg font-bold pl-2 ">
                      ${item.price}
                    </h6>
                    <button
                      className="px-0.5 max-md:max-w-24 pt-1  md:px-2 md:py-1 max-md:text-sm rounded-md hover:scale-[.98]  bg-golden hover:bg-greener  text-white  "
                      onClick={() => {
                        const path = `/${item.id}`
                        navigate(path)
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div id="mains" className="p-8 mt-4 md:mt-8">
          <motion.h1
            className=" font-semibold font-josefin text-golden text-5xl lg:text-6xl text-start ml-10 md:ml-20 pb-6 pr-4"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Mains
          </motion.h1>
        </div>
        <div className=" text-blackish font-josefin">
          <motion.div
            className="grid  md:grid-cols-2 gap-5 md:gap-8 mx-2 md:ml-14 lg:ml-20"
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
            {menuItems.slice(0, 6).map((item: props) => (
              <motion.div
                className="card card-side bg-white shadow-xl max-w-[375px] max-md:mx-auto lg:max-w-zz  hover:scale-[1.005] "
                key={item.id}
                variants={menuVariant}
                onClick={() => {
                  const path = `/${item.id}`
                  navigate(path)
                }}
              >
                <div className="bg-greener rounded-lg self-center py-5">
                  <figure className="">
                    <img src={item.img} alt="food" className="p-1" />
                  </figure>
                </div>
                <div className="pl-2 self-center">
                  <h2 className="card-title p-2">{item.title}</h2>
                  <p className="pl-2 text-sm pb-2 font-normal leading-none w-[93%]">
                    {item.para}
                  </p>
                  <div className="grid  grid-cols-2 sm:place-items-start mr-3 mb-2 pt-1 items-center">
                    <h6 className="text-golden text-base md:text-lg font-bold pl-2 ">
                      ${item.price}
                    </h6>
                    <button
                      className="px-0.5 max-md:max-w-24 pt-1  md:px-2 md:py-1 max-md:text-sm rounded-md hover:scale-[.98]  bg-golden hover:bg-greener  text-white  "
                      onClick={() => {
                        const path = `/${item.id}`
                        navigate(path)
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div id="desserts" className="p-8 mt-4 md:mt-8">
          <motion.h1
            className="font-semibold font-josefin text-golden text-5xl lg:text-6xl text-start ml-10 md:ml-20 pb-6 pr-4"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Desserts
          </motion.h1>
        </div>
        <div className=" text-blackish font-josefin">
          <motion.div
            className="grid  md:grid-cols-2 gap-5 md:gap-8 mx-2 md:ml-14 lg:ml-20"
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
            {menuItems.slice(9, 12).map((item: props) => (
              <motion.div
                variants={menuVariant}
                className="card card-side bg-white shadow-xl max-w-[375px] max-md:mx-auto lg:max-w-zz  hover:scale-[1.005] "
                key={item.id}
                onClick={() => {
                  const path = `/${item.id}`
                  navigate(path)
                }}
              >
                <div className="bg-greener rounded-lg self-center py-5">
                  <figure className="">
                    <img src={item.img} alt="food" className="p-1" />
                  </figure>
                </div>
                <div className="pl-2 self-center">
                  <h2 className="card-title p-2">{item.title}</h2>
                  <p className="pl-2 text-sm pb-2 font-normal leading-none w-[93%]">
                    {item.para}
                  </p>
                  <div className="grid  grid-cols-2 sm:place-items-start mr-6 mb-2  items-center">
                    <h6 className="text-golden text-base md:text-lg font-bold pl-2 ">
                      ${item.price}
                    </h6>
                    <button
                      className="px-0.5 max-md:max-w-24 pt-1  md:px-2 md:py-1 max-md:text-sm rounded-md hover:scale-[.98]  bg-golden hover:bg-greener  text-white  "
                      onClick={() => {
                        const path = `/${item.id}`
                        navigate(path)
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div id="drinks" className="p-8 mt-4 md:mt-8">
          <motion.h1
            className="font-semibold font-josefin text-golden text-5xl lg:text-6xl text-start ml-10 md:ml-20 pb-6 pr-4"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Drinks
          </motion.h1>
        </div>
        <div className="flex flex-col items-center justify-around md:flex-row-reverse ">
          <div className="mb-14">
            <img
              src="/assets/bg/photo-collage.png.png"
              className="w-80 md:w-96 "
            ></img>
          </div>

          <div className=" text-blackish font-josefin ml-6 mr-2 mb-10 ">
            <h5 className="text-xl md:text-2xl  mt-3">Caribbean</h5>
            <p className="opacity-90 font-light  md:text-lg pl-1 ">
              Grenadine syrup / vanilla ice cream / Avocado / honey.
            </p>
            <h5 className="text-xl md:text-2xl  mt-3"> Margarita</h5>
            <p className="font-light opacity-90 md:text-lg pl-1">
              Lime / syrup / triple sec / honey.
            </p>
            <h5 className="text-xl md:text-2xl  mt-3">Pina Colada</h5>
            <p className="opacity-90 font-light  md:text-lg pl-1">
              Coconut cream / Pineapple juice / Rum / Pineapple wedge for
              garnish.
            </p>
            <h5 className="text-xl md:text-2xl  mt-3">Mojito</h5>
            <p className="opacity-90 font-light  md:text-lg pl-1">
              Fresh and zesty with a burst of lime and refreshing mint.
            </p>
            <h5 className="text-xl md:text-2xl  mt-3"> Water</h5>
            <p className="opacity-90 font-light  md:text-lg pl-1">
              Mineral / Sparkling
            </p>
            <h5 className="text-xl md:text-2xl  mt-3"> Soft Drinks</h5>
            <p className="opacity-90 font-light  md:text-lg pl-1">
              Cola / Fanta / Pepsi / Sprite.
            </p>
          </div>
        </div>
      </section>

      <img
        src="/assets/bg/Carrot.png"
        className="size-60 md:size-72 2xl:size-96 absolute -left-28 2xl:-left-32 bottom-28 md:bottom-36 opacity-10 rotate-45 "
      />
    </main>
  )
}
