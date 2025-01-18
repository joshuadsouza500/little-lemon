import React from 'react'
import { NavLink } from 'react-router-dom'
import { Mail, Phone, Globe, Copyright } from 'lucide-react'
//bg-[url('/assets/footer.jpg')]
{
  /**export const Footer = () => {
  return (
    <footer className=" bg-Dgreen bottom-0 bg-no-repeat bg-center py-6">
      <div className=" font-josefin pt-4 pb-1 flex justify-between px-6 md:px-40 items-center">
        <div>
          <ul
            tabIndex={0}
            className="flex flex-col gap-1 text-white text-opacity-80"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="reservation">Reservation</NavLink>
            </li>
          </ul>
        </div>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>
      <hr className="white opacity-50" />
      <div className="p-2 md:px-8 text-white text-opacity-80 flex items-center justify-between">
        <img src="/assets/little_lemon_logo.png" width={120}></img>
        <h6> © 2024 Little Lemon</h6>
      </div>
    </footer>
  )
} */
}

export function Footer() {
  return (
    <footer className="relative text-white overflow-hidden bg-[url('/assets/footer.jpg')] h-full w-full bg-cover bg-center bg-no-repeat">
      <div className=" mx-auto px-4 pt-6 pb-4 md:pt-12 md:pb-6 z-20">
        <div className="grid grid-cols-2  lg:grid-cols-3 gap-1 place-items-baseline pl-4 items-start md:gap-8  lg:pl-10 max-w-xxl 2xl:max-w-xxxl mx-auto">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <nav className="space-y-2">
              <NavLink
                to="/"
                className="block text-gray-200 hover:text-golden transition-colors"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="block text-gray-200 hover:text-golden transition-colors"
              >
                About
              </NavLink>
              <NavLink
                to="/menu"
                className="block text-gray-200 hover:text-golden transition-colors"
              >
                Menu
              </NavLink>

              <NavLink
                to="/reservation"
                className="block text-gray-200 hover:text-golden transition-colors"
              >
                Reservation
              </NavLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-golden" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-golden" />
                <span>info@littlelemon</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-golden" />
                <span>123 Blvd Street</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="hidden md:block">
            <h3 className=" text-xl font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: 11am - 10pm</p>
              <p>Saturday: 11am - 11pm</p>
              <p>Sunday: 11am - 9pm</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-500 mt-8 pt-5 flex flex-col md:flex-row justify-between items-center lg:mx-4 2xl:mx-10 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Copyright className="w-4 h-4" />
            <span>2024 Little Lemon. All rights reserved.</span>
          </div>
          <div className="max-md:mt-2 max-md:w-full">
            <nav className="flex gap-8 text-xs justify-between ">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
