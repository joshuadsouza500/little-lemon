import React from 'react'

export const NavBar = () => {
  return (
    <nav className='p-1 w-full fixed bg-white z-20'>
      <div className='flex justify-between items-center font-josefin'>
        <a href='/'>
            <img src='src/assets/littlelicon.png'width={200} height={50} className='ml-4 md:ml-12'></img>
        </a>

        <div className='mr-16 lg:mr-28  text-golden '>
         <ul tabIndex={0} className="hidden md:flex gap-5 ">
                <li><a href='/' className='hover:text-greener hover:scale-105'>Home</a></li>
                <li><a href='/about'className='hover:text-greener hover:scale-105'>About</a></li>
                <li><a href='/menu' className='hover:text-greener hover:scale-105'>Menu</a></li>
                <li><a href='reservation'className='hover:text-greener hover:scale-105'>Reservation</a></li>
                </ul>
      </div>
        <div className="md:hidden dropdown dropdown-end sm:mr-4">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16M4" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 ">
                  <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/menu' >Menu</a></li>
                <li><a href='reservation'>Reservation</a></li>
            </ul>
        </div>
       
     
      </div>
    </nav>
  )
}
