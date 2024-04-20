import React from 'react'

export const About = () => {
  return (
   <>
     <div className='flex flex-col md:flex-row  pt-20 pb-10 pr-2'>
        <div className='flex flex-col gap-3 ml-6 md:ml-20 pr-2  md:pr-0 items-center md:items-start'>
           <h1 className='font-alex text-golden text-6xl lg:text-7xl text-center md:text-left pr-4 -ml-8'>
              Welcome to
           </h1>
           <h1 className='pr-4 font-josefin text-4xl md:text-5xl lg:text-6xl font-bold text-blackish md:w-[70%] text-center md:text-left pb-6 '>
              Little Lemon Restaurant
           </h1>
           <p className='font-josefin text-justify text-blackish w-[95%] text-lg md:w-[80%] pb-4'>
             We are a family-owned Mediterranean Restaurant focused on traditional recipes served with a modern twist. Indulge in a culinary journey that captures the essence of our family's heritage, where every bite is a celebration of tradition and innovation.

           </p>
           <a href='/about' className="-ml-4 sm:ml-0 text-lg text-golden font-josefin w-[125px]  border-b border-golden hover:text-greener hover:border-greener">Meet the team</a>
        </div>
        <div className='px-8  pt-14 md:pt-1 '>
          <img src='src/assets/ABout.jpg' width={2000} ></img>
        </div>
     </div>
    </>
  )
}
