import React from 'react'

export const Hero = () => {
  return (
    <>
    <div className="md:bg-cover bg-cover bg-no-repeat bg-center w-full h-dvh bg-[url('src/assets/bgmain.jpg')] ">
     <div className='inset-0 bg-black bg-opacity-50 h-dvh'>
      <div className='ml-20 md:ml-10 pr-2 pt-36 flex flex-col gap-4 w-2/4 items-center font-josefin'>
     <h1 className='font-Heading text-6xl md:text-7xl lg:text-8xl text-white text-center '>A Taste of Perfection</h1>
   
    
          <a className='bg-golden  btn  text-white font-bold w-44  rounded-2xl hover:bg-greener hover:text-golden' href='/reservation' >Reserve a table</a>
       

     
     </div>
     </div> 
    </div>

    </>
  )
}
