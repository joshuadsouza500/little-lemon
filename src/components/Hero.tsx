import React from 'react'
import { NavLink } from 'react-router-dom';
export const Hero = () => {
  return (
    <>
<div className="  md:bg-cover bg-cover bg-no-repeat bg-center w-full h-dvh md:h-dvh bg-[url('src/assets/bgv.jpg')] md:bg-[url('src/assets/bgmain.jpg')] ">


     <div className='inset-0 bg-black bg-opacity-50 h-dvh'>
      <div className=' mx-2 md:ml-10 pr-2 pt-36 flex flex-col gap-4  md:w-2/4 items-center font-josefin'>
     <h1 className='font-Heading text-6xl md:text-7xl lg:text-8xl text-white text-center '>A Taste of Perfection</h1>
        <div className='flex gap-2 mx-5'>
         <button className="btn w-36 md:w-52 text-base md:text-lg bg-greener border-white rounded-lg  hover:bg-transparent hover:backdrop-blur-sm text-white"> 
          <a  href='/reservation' >Book a table</a>
         </button> 
         <button className="btn w-36 md:w-52 text-base md:text-lg btn-ghost border-white rounded-lg hover:bg-greener hover:border-white text-white backdrop-blur-sm"> 
          <NavLink  to='/cart' >Order Online</NavLink>
         </button> 
         </div>
     </div>
     
     </div> 
     </div>
    

    </>
  )
}
