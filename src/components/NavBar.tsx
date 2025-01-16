import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { motion } from 'framer-motion'
import { ShoppingBasket } from 'lucide-react'

export const NavBar = () => {
  const { cartQuantity } = useCartContext()
  const [colour, setcolour] = useState(false)
  //funcion to change colour on scroll //
  const changeColour = () => {
    if (window.scrollY >= 80) setcolour(true)
    else setcolour(false)
  }
  window.addEventListener('scroll', changeColour)

  return (
    <motion.nav
      className={
        colour
          ? 'bg-white p-1 md:p-2 border-b border-b-golden w-full fixed z-20'
          : 'backdrop-blur-sm p-1 w-full fixed z-20'
      }
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ staggerChildren: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center font-josefin">
        <NavLink to="/">
          <img
            src="/assets/littlelicon.png"
            width={200}
            height={50}
            className=" md:ml-12 max-md:-ml-2"
          />
        </NavLink>
        {/* lg: navbar*/}

        <div className="mr-16 lg:mr-28 text-xl font-semibold text-golden pt-2">
          <ul tabIndex={0} className="hidden md:flex gap-5 justify-center ">
            <li>
              <NavLink
                to="/"
                className="hover:text-green-700 aria-[current=page]:underline  aria-[current=page]:text-green-700 "
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="aria-[current=page]:text-green-700 aria-[current=page]:underline  hover:text-green-700    "
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className="hover:text-green-700   aria-[current=page]:text-green-700 aria-[current=page]:underline"
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#reservation"
                className="hover:text-green-700   aria-[current=page]:text-green-700 aria-[current=page]:underline pr-2"
              >
                Reservation
              </NavLink>
            </li>
            <li className="flex flex-row-reverse ">
              <span className="-mt-3 ">{cartQuantity}</span>
              <NavLink
                to="/cart"
                className=" aria-[current=page]:border-b-green-700  aria-[current=page]:border-b-2"
              >
                <ShoppingBasket className="-mt-1 -ml-1 size-9 hover:text-greener text-golden" />
              </NavLink>
            </li>
          </ul>
        </div>

        {/* mobile navbar*/}
        <NavLink
          to="/cart"
          className="md:hidden flex flex-row-reverse -mr-4 sm:-mr-7 "
        >
          <span className="-mt-2 text-golden text-lg md:text-2xl p-1">
            {cartQuantity}
          </span>
          <ShoppingBasket className="size-7 text-golden" />
        </NavLink>
        <div className="md:hidden dropdown dropdown-end sm:mr-4 p-1 flex gap-1">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill=""
              viewBox="0 0 24 24"
              stroke="#E4B44E"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16M4"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-52 "
          >
            <li className="active:bg-greener ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="active:bg-greener ">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="active:bg-greener ">
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li className="active:bg-greener ">
              <NavLink to="#reservation">Reservation</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

{
  /**import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const images = [
  {
    src: '/assets/Hero1.jpeg',
    alt: 'Delicious layered dessert with whipped cream',
    title: 'Experience Culinary Excellence',
  },
  {
    src: '/assets/Hero2.jpeg',
    alt: 'Tiramisu dessert presentation',
    title: 'Experience Culinary Excellence',
  },
  {
    src: '/assets/Hero3.jpeg',
    alt: 'Artistic cake presentation from above',
    title: '40% off on all orders on Fridays',
  },
]

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const getDotIndex = (index) => {
    if (!emblaApi) return
    return emblaApi.selectedScrollSnap()
  }
  return (
    <div className="embla overflow-hidden pt-20 " ref={emblaRef}>
      <div className=" h-[85vh]   flex w-full relative">
        {images.map((image, index) => (
          <div
            key={index}
            className=" min-w-full w-full h-full flex-none relative "
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-fill w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
                {image.title}
              </h1>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 right-4 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full ${getDotIndex(index) === index ? 'bg-white' : 'bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
 */
}
