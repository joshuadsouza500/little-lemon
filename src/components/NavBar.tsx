import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
export const NavBar = () => {
 

   const {cartQuantity} = useCartContext()

  return (
    <nav className='p-2 w-full fixed  z-20  backdrop-blur-sm'>
      <div className='flex justify-between items-center font-josefin'>
        <NavLink to='/'>
            <img src='src/assets/littlelicon.png' width={200} height={50} className='ml-4 md:ml-12'></img>
        </NavLink>
  {/* lg: navbar*/ }
          
        <div className='mr-16 lg:mr-28 text-xl font-semibold text-golden pt-2'>
          
         <ul tabIndex={0} className="hidden md:flex gap-5 justify-center ">
                <li>
                  <NavLink to='/' className='hover:text-green-700 hover:scale-105  aria-[current=page]:text-green-700 aria-[current=page]:underline' >Home</NavLink>
                  </li>
                <li>
                  <NavLink to='/about'  className='aria-[current=page]:text-green-700 aria-[current=page]:underline  hover:text-green-700  hover:scale-105  '>About</NavLink></li>
                <li>
                  <NavLink to='/menu' className='hover:text-green-700 hover:scale-105  aria-[current=page]:text-green-700 aria-[current=page]:underline'>Menu</NavLink></li>
                <li>
                  <NavLink to='/reservation' className='hover:text-green-700 hover:scale-105  aria-[current=page]:text-green-700 aria-[current=page]:underline pr-2'>Reservation</NavLink></li>
                  <li className='flex flex-row-reverse '>
                  <span className='-mt-5 '>{cartQuantity}</span>    
                    <NavLink to='/cart' className=' aria-[current=page]:border-b-green-700  aria-[current=page]:border-b-2'>
                  <img className='-mt-3' src= "src/assets/download.svg"></img>
                   
                   </NavLink>
                  </li>
                </ul>
      </div>


         {/* mobile navbar*/ }
         <NavLink to='/cart' className='md:hidden flex flex-row-reverse -mr-3 '>
             <span className='-mt-2 text-golden text-2xl p-1'>{cartQuantity}</span> 
              <img className='h-10 hover:scale-105 ' src= "src/assets/download.svg"></img>
             </NavLink>
        <div className="md:hidden dropdown dropdown-end sm:mr-4 p-1 flex gap-1">
            
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="" viewBox="0 0 24 24" stroke="#E4B44E"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16M4" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 ">
                 =<li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/menu' >Menu</NavLink></li>
                <li><NavLink to='/reservation'>Reservation</NavLink></li>
            </ul>
        </div>
       
     
      </div>
    </nav>
  )
}
