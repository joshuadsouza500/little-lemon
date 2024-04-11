import React from 'react'

export const OurStory = () => {
  return (
    <>
      <div className='pb-4 md:pb-10'>
        <div className='flex justify-center items-start pt-16 md:pt-24 text-center'>
            <a href='/' className='btn btn-circle bg-golden md:ml-8 m-4 absolute left-0 hover:bg-greener'> ❮ </a>
           
            <h1 className='font-alex text-golden text-6xl lg:text-7xl text-center pb-6 pr-4'>
                   About Us             
              </h1>
              </div> 
                  
        <div className='flex flex-col md:flex-row mt-2 md:mt-10 flex-auto'>
             
              <div className='flex flex-col gap-3 ml-4 md:ml-20 pr-2  md:pr-0 items-center md:items-start  lg:w-[70%]'>
           
                   <h1 className='pr-4 font-josefin text-4xl md:text-5xl lg:text-6xl font-bold text-blackish md:w-[70%] text-center md:text-left pb-6 '>
                       Our Story
                     </h1>
                <span className='font-josefin text-justify text-blackish w-[95%] text-lg md:text-base lg:text-lg md:w-[85%] pb-4 '>
                Nestled in the heart of California, Little Lemon is a restaurant that holds a special place in the community. Founded by our family 50 years ago, our restaurant has been a cherished gathering spot for those seeking the flavours of traditional Mediterranean cuisine.<br></br>As a family-owned business, every dish that leaves our kitchen carries with it the warmth and charm of our heritage. Our commitment to preserving the authenticity of traditional Mediterranean flavours is at the heart of everything we do, ensuring that each bite evokes memories of home-cooked meals and shared moments around the table.
                  </span>
          
                 </div>
             <div className='md:pr-10 md:pt-10 flex justify-center p-5 md:flex-none md:w-1/2 md:h-96'>

             <img src='src/assets/seating2new.jpg' width={500}  className=""></img>
             </div>
          </div>
      </div>
    </>
  )
}
