import React from 'react'

export const Discover = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row-reverse  pt-20 pb-10 md:pb-16 md:gap-36 pr-2'>
        <div className='flex flex-col gap-3 ml-4 md:pl-16   md:pr-0 items-center md:items-baseline lg:w-[50%]'>
           <h1 className='font-alex text-golden text-6xl lg:text-7xl text-center pr-4'>
              Discover
           </h1>
           <h1 className='pr-4 font-josefin text-4xl md:text-5xl lg:text-6xl font-bold text-blackish md:w-[90%] text-center md:text-left pb-6'>
               Our Menu
            </h1>
           <p className='font-josefin text-justify text-blackish text-lg w-[95%] md:w-[80%] pb-4'>
           Savor the vibrant flavors of the Mediterranean with our thoughtfully crafted dishes that showcase the best of both old-world charm and contemporary creativity. Our menu is a delicious exploration of traditiona roots, come taste the difference today.
           </p>
           <a href='/menu' className="-ml-4 sm:ml-0 text-lg text-golden font-josefin w-[165px]  border-b border-golden hover:text-greener hover:border-greener">View Our Full Menu</a>
        </div>
        
        <div className=' pt-14 md:pt-1 lg:pl-20 flex justify-center md:flex-none'>
         
        <div className="carousel carousel-center bg-greener rounded-badge w-mid  border-golden shadow-md  items-center">          
                  <div className="carousel-item w-[80%] px-8 ">
                    <img src="src/assets/newfettucine (1).png" className="w-full " />
                    
                  </div> 
                  <div className="carousel-item w-[80%] pr-1">
                    <img src="src/assets/newplate .png" className="w-full" />
                  </div> 
                  <div className="carousel-item w-[80%] px-4">
                    <img src="src/assets/newfalafel - removebg-preview (1).png" className="w-full" />
                  </div> 
                  <div className="carousel-item w-[80%] ">
                    <img src="src/assets/spanakopita.png" className="w-full" />
                  </div> 
 
          </div>
        </div>
     </div>
    </>
  )
}
