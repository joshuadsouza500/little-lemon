import React from 'react'
import { useCartContext } from '../context/CartContext'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MinusIcon, PlusIcon } from 'lucide-react'
export const Cart = () => {
  const {
    removeItem,
    increaseCart,
    decreaseCart,
    cart,
    TotalAmount,
    isEmpty,
    isAdded,
  } = useCartContext()
  //IMporting the function using context//
  return (
    <main>
      <div className="pt-20 ">
        <motion.h1
          className=" text-blackish font-bold text-6xl lg:text-7xl text-center pb-2 pt-4"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, type: 'spring' }}
        >
          Cart
        </motion.h1>
      </div>

      {/* Cart Items 
      mapping over the cart to display the items */}

      <div className="p-1 mb-16 flex flex-col justify-center items-center font-josefin   max-w-xxl 2xl:max-w-xxxl mx-auto">
        {cart.map((cart) => (
          <div
            key={cart.id}
            className="bg-white  shadow-lg rounded-xl flex mt-4 w-[90%] md:w-[60%] gap-4 border-golden border"
          >
            <div className="bg-greener  p-1 rounded-lg w-28 md:w-36">
              <figure>
                <img src={cart.img} alt="food" className="px-1 py-4" />
              </figure>
            </div>

            {/*Card details*/}
            <div className=" w-[60%] lg:w-[70%] flex justify-between pr-4 ml-1">
              <div className="  pt-2  text-blackish ">
                <h2 className=" -ml-1 p-1 font-bold text-2xl md:text-3xl  mb-3 md:mb-4 ">
                  {cart.title}
                </h2>

                <button
                  className="btn btn-square hover:bg-golden bg-red-700 text-white btn-sm "
                  onClick={() => decreaseCart(cart.id)}
                >
                  <MinusIcon />
                </button>
                <span className="px-5 py-2 md:py-4 rounded-md text-lg md:text-xl ">
                  {cart.quantity}
                </span>
                <button
                  className="btn btn-square hover:bg-golden bg-greener  text-white btn-sm "
                  onClick={() => increaseCart(cart.id)}
                >
                  <PlusIcon />
                </button>

                <div className=" mt-3 md:mt-4 pb-2">
                  <button
                    className=" btn w-28 md:w-36 btn-sm btn-ghost text-lg font-normal border-greener hover:bg-red-700  hover:text-white "
                    onClick={() => removeItem(cart.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="self-center md:-mr-4 mt-2">
                <h1 className="text-golden text-lg md:text-2xl font-semibold -mr-1  ">
                  {/*To give the total price of each item not the full total of the cart*/}
                  ${(cart.price * cart.quantity).toFixed(2)}
                </h1>
              </div>
            </div>
          </div>
        ))}

        {isEmpty && (
          <motion.div
            className=" md:w-[70%] px-4 py-10 text-center mx-2 text-2xl bg-red-600 rounded-xl text-white "
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring' }}
          >
            <h1> Your Cart is empty. Add an item to proceed to checkout!</h1>
          </motion.div>
        )}

        <div className="flex mt-4 bg-greener justify-end text-3xl pr-10 w-[90%] md:w-[60%] gap-4 font-semibold pt-3 pb-2 text-white rounded-md ">
          <h1>Total:</h1>
          <h1>${TotalAmount}</h1>
        </div>
        <div className="mt-2  flex flex-row gap-3 justify-center  md:w-[60%] md:justify-end">
          <button className=" btn w-40 md:w-52 btn-ghost p-2 text-xl border-2 border-golden rounded-lg hover:bg-golden hover:bg-opacity-90 hover:border text-golden hover:text-white">
            <NavLink to="/menu">Add Items</NavLink>
          </button>

          <button className="btn w-40 md:w-52  p-2 text-xl border-1  rounded-lg bg-golden hover:bg-greener text-white">
            Checkout
          </button>
        </div>
      </div>
    </main>
  )
}
