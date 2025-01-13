import React from 'react'

const Booking = () => {
  return (
    <div className="py-12 lg:py-20 bg-Dgreen h-auto w-full ">
      <h2 className="text-golden font-semibold text-center text-5xl pb-8 lg:pb-10 ">
        Book your Table
      </h2>
      <section className="flex flex-col gap-y-3 lg:gap-y-4  items-center justify-center max-w-sm sm:max-w-lg md:max-w-xl mx-auto px-2 text-golden/40 ">
        <div className="flex gap-x-3 w-full items-center">
          {' '}
          <input
            className="border-golden/40 border-[0.5px] py-2 lg:py-3 px-2 bg-transparent backdrop-blur-sm  rounded w-full"
            type="date"
            placeholder="Date"
          />
          <input
            className="border-golden/40 border-[0.5px] py-2 lg:py-3 px-2 bg-transparent backdrop-blur-sm  rounded w-full"
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
        <button className="ml-1 btn w-40 md:w-44 text-base bg-golden  rounded-lg  hover:bg-greener  text-white">
          Book Now
        </button>
      </section>
    </div>
  )
}

export default Booking
