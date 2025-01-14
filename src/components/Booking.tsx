import React from 'react'

const Booking = () => {
  return (
    <div className="py-16 md:py-24 2xl:py-32 bg-Dgreen h-auto w-full ">
      <h1 className="font-alex text-golden text-6xl lg:text-7xl text-center pr-4 pb-4 -ml-1">
        Join Us
      </h1>
      <h2 className="pr-4 text-4xl text-white font-josefin font-semibold text-center lg:text-6xl pb-8 lg:pb-10 ">
        Book a Table
      </h2>
      <section className="flex flex-col gap-y-3 lg:gap-y-4  items-center justify-center max-w-sm sm:max-w-lg md:max-w-xl mx-auto px-2 text-golden/40 ">
        <div className="flex gap-x-3 w-full items-center">
          {' '}
          <input
            className="border-golden/40 border-[0.5px] py-2 lg:py-3 px-2 bg-transparent backdrop-blur-sm  rounded w-full placeholder:text-golden/40"
            type="date"
            placeholder="Date"
          />
          <input
            className="border-golden/40 border-[0.5px] py-2 lg:py-3 px-2 bg-transparent backdrop-blur-sm  rounded w-full placeholder:text-golden/40"
            type="time"
            placeholder="Time"
          />
        </div>
        <div className="flex gap-x-3 w-full">
          {' '}
          <input
            className="border-golden/40 border-[0.5px] py-2 lg:py-3 px-2 bg-transparent backdrop-blur-sm  rounded w-full placeholder:text-golden/40  "
            type="number"
            placeholder="Number of Guests"
          />
          <input
            className="border-golden/40 border-[0.5px] py-2 lg:py-3 px-2 bg-transparent backdrop-blur-sm  rounded w-full placeholder:text-golden/40 "
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="border-golden/40 mb-1 border-[0.5px] py-8 px-4 bg-transparent backdrop-blur-sm  rounded w-full placeholder:text-golden/40  "
          type="text"
          placeholder="Message"
        />
        <button className="ml-1 btn w-32 md:w-36 text-base bg-golden  rounded-lg  hover:bg-greener  text-white">
          Book Now
        </button>
      </section>
    </div>
  )
}

export default Booking
