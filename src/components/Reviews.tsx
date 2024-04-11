import React from 'react'

export const Reviews = () => {
  return (
    <>
    
    <div className='flex flex-col justify-center items-center pt-8 md:pt-14 md:pb-20'>
           <h1 className='font-alex text-golden text-6xl lg:text-7xl text-center pr-4 pb-4 -ml-1'>
              Customer
           </h1>
             <h1 className='pr-4 font-josefin text-4xl md:text-5xl lg:text-6xl font-bold text-blackish md:w-[70%] text-center pb-6'>
               Reviews
            </h1>
            <div className='stack'>
        <div className='rounded-2xl bg-greener w-[90%] sm:w-[75%] py-6 md:py-10 px-8 font-josefin text-white text-center sm:text-xl text-opacity-90'>
            <span className='text-golden'>&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</span>
            <p className='py-4'>"The Little Lemon Restaurant is a hidden gem that deserves all the praise it gets. I will definitely be returning and I highly recommend this restaurant to anyone looking for a fantastic dining experience."</p>
            <h3 >Kylie meyer. </h3>
        </div>
        <div className='rounded-2xl bg-greener w-[90%] sm:w-[75%] py-6 md:py-10 px-8 font-josefin text-white text-center sm:text-xl text-opacity-90'>
            <span className='text-golden'>&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</span>
            <p className='py-4'>"The Little Lemon Restaurant is a hidden gem that deserves all the praise it gets. I will definitely be returning and I highly recommend this restaurant to anyone looking for a fantastic dining experience."</p>
            <h3 >John Lewis. </h3>
        </div>
        </div>
        </div>
    
    </>
  )
}
