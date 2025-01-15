import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

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
//Uses the usenavigate hook to navigate to a certain page//
export const Recommended = ({ menuItems }) => {
  const navigate = useNavigate()

  return (
    <>
      <div id="specials" className="p-5 mt-20">
        <div className="grid md:grid-cols-2 justify-center place-items-center mb-6">
          <motion.h1
            className="font-josefin text-5xl lg:text-6xl text-start ml-2 pb-6 pr-2 font-bold text-blackish"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring' }}
            viewport={{ once: true }}
          >
            Recommended
          </motion.h1>

          <motion.button
            className="md:-mt-6 btn w-48 btn-ghost p-2 text-lg border-2 border-greener rounded-xl hover:bg-greener text-blackish hover:text-white hover:scale-105 "
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2, type: 'spring' }}
            viewport={{ once: true }}
          >
            <NavLink to="/menu">Show More</NavLink>
          </motion.button>
        </div>
      </div>

      <div className=" text-blackish font-josefin mb-16  max-w-xxl 2xl:max-w-xxxl mx-auto ">
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
          {menuItems.slice(2, 6).map((item, index) => (
            <motion.div
              className="card max-md:mx-auto card-side bg-white shadow-xl max-w-[375px] lg:max-w-zz hover:scale-[.98] "
              key={index}
              variants={menuVariant}
            >
              <div className="bg-greener rounded-lg self-center py-5">
                <figure className="">
                  <img src={item.img} alt="food" className="p-1" />
                </figure>
              </div>
              <div className="pl-3 self-center">
                <h2 className="card-title p-2">{item.title}</h2>
                <p className=" pl-2 text-sm pb-2 font-normal leading-none md:leading-tight w-[90%]">
                  {item.para}
                </p>
                <div className="grid grid-cols-2 sm:place-items-start mr-6 my-2 items-center">
                  <h6 className="text-golden text-base md:text-lg font-bold pl-2 ">
                    ${item.price}
                  </h6>
                  <button
                    className="px-1 py-0.5 md:px-2 md:py-1 max-md:text-sm rounded-md hover:scale-[.98]  bg-golden hover:bg-greener  text-white  "
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
    </>
  )
}
