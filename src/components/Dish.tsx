import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronLeftIcon, ChevronRight } from 'lucide-react'

export const Dish = ({ menuItems }) => {
  //TO get the itemid from url param and check if it is in cart//
  const { id } = useParams<{ id: string }>()
  const menuItem = menuItems.find((item) => item.id.toString() === id)
  const navigate = useNavigate()
  if (!menuItem) {
    return <div>No menu item found for id {id}</div>
  }

  const { handleCart, isAdded } = useCartContext()
  return (
    <>
      <div className="pt-20 mx-2 md:px-6 xl:px-10 md:py-14 items-center h-full max-w-5xl  lg:max-w-xxl 2xl:max-w-xxxl md:mx-auto  ">
        {/*To condotional display if cart is empty using context prop*/}
        {isAdded && (
          <motion.div
            role="alert"
            className="absolute top-12 right-1 md:right-10 xl:right-20 md:w-[40%] px-4 py-8 text-center mx-2 text-2xl  bg-red-600 rounded-xl mt-10 text-white z-10"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8, type: 'spring' }}
          >
            <span>Item already added to cart!</span>
          </motion.div>
        )}

        <div className=" grid md:grid-cols-2 md:mt-10 mt-2 rounded-lg ">
          <div className=" w-full flex justify-center items-center  ">
            <button
              onClick={() => {
                if (id) {
                  const path = `/${parseInt(id) - 1}`
                  navigate(path)
                }
              }}
              className="p-1 text-2xl btn-circle bg-greener m-1 md:m-2"
            >
              <ChevronLeft className="size-6" />
            </button>
            <div className="md:bg-greener py-2 rounded-lg flex items-center px-5">
              <img src={menuItem.img} alt="food item image" className="p-1" />
            </div>
            <button
              onClick={() => {
                if (id) {
                  const path = `/${parseInt(id) + 1}`
                  navigate(path)
                }
              }}
              className="  btn-circle bg-greener m-1 md:m-2"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>

          {/*Card details*/}

          <div className=" pl-4 lg:pl-8 pt-8 bg-white md:pt-12 font-josefin text-blackish">
            <h2 className=" p-2 -ml-2 font-black text-5xl mb-4 ">
              {menuItem.title}
            </h2>

            <h6
              className="pl-2 text-2xl mb-2 font-semibold
                     leading-normal "
            >
              Ingredients
            </h6>
            <p className="pl-2 text-base mb-4 md:mb-6 font-normal w-[95%] lg:w-[80%]">
              {menuItem.ing}
            </p>

            <h6
              className="pl-2 text-2xl  font-semibold
                    leading-normal"
            >
              Price
            </h6>

            <div className="grid grid-cols-1 sm:place-items-start mr-8 items-center mb-10">
              <h6 className="text-golden text-2xl font-bold pl-2 mb-4">
                ${menuItem.price}
              </h6>

              <button
                className="ml-1 px-6 xl:px-10 py-2 rounded-md bg-golden hover:bg-greener text-white text-xl hover:scale-[.98] "
                onClick={() => {
                  handleCart(menuItem)
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dish
