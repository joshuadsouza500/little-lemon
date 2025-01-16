import React from 'react'
import { NavLink } from 'react-router-dom'

const Booking = () => {
  return (
    <div
      id="reservation"
      className=" pt-14 pb-20 md:pt-20 md:pb-32   bg-Dgreen h-auto w-full relative overflow-hidden"
    >
      {/**<img
        src="/assets/Booking.png"
        alt="Chef"
        className="size-60 md:size-72 2xl:size-[500px] absolute -left-16 2xl:-left-10 bottom-2 opacity-40"
      /> */}
      <h1 className="font-alex text-golden text-5xl lg:text-7xl text-center pr-4 pb-2 lg:pb-4 -ml-1">
        Join Us
      </h1>
      <h2 className="pr-2 text-4xl text-white font-josefin font-semibold text-center lg:text-6xl pb-8 lg:pb-10 ">
        Book a Table
      </h2>
      <section className="flex flex-col gap-y-3 lg:gap-y-4  items-center justify-center max-w-sm sm:max-w-lg md:max-w-xl 2xl:max-w-3xl mx-auto px-2 text-golden/50 ">
        <div className="flex gap-x-3 w-full items-center">
          {' '}
          <input
            className="border-golden/60 border-[0.5px] py-2 lg:py-3 px-2 bg-transparent backdrop-blur-sm  rounded w-full placeholder:text-golden/40 text-golden/50 "
            type="date"
            placeholder="Date"
          />
          <input
            className="border-golden/60 border-[0.5px] py-2 lg:py-3 px-2 bg-transparent backdrop-blur-sm  rounded w-full placeholder:text-golden/40 text-golden/50 "
            type="time"
            placeholder="Time"
          />
        </div>
        <div className="flex gap-x-3 w-full">
          {' '}
          <input
            className="border-golden/60 border-[0.5px] py-2 lg:py-3 px-2 bg-transparent backdrop-blur-sm  rounded w-full placeholder:text-golden/40  "
            type="number"
            placeholder="Number of Guests"
          />
          <input
            className="border-golden/60 border-[0.5px] py-2 lg:py-3 px-2 bg-transparent backdrop-blur-sm  rounded w-full placeholder:text-golden/40 "
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="border-golden/60 mb-1 xl:mb-2 border-[0.5px] py-8 px-4 bg-transparent backdrop-blur-sm  rounded w-full placeholder:text-golden/40  "
          type="text"
          placeholder="Message"
        />
        <button className=" py-2  px-4 text-sm md:text-base bg-golden border-white rounded-sm  hover:bg-[#E4B44E] shadow-md text-white hover:scale-[.98]">
          <NavLink to="/reservation">Book a Table</NavLink>
        </button>
      </section>
    </div>
  )
}

export default Booking
