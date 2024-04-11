import React from 'react'

export const Hero = () => {
  return (
    <>
    <div className=" ">
     <div className='bg-greener h-1/2 flex flex-col items-center  md:flex-row'>
      <div className='md:ml-20  pr-2 pt-36 pb-10 flex flex-col gap-2 md:gap-4 w-3/4 md:w-2/4 items-start font-serif'>
     <h1 className='text-6xl  md:text-center text-golden font-bold'>Little Lemon</h1>
     <h2 className= 'text-white text-3xl md:text-4xl pb-4 font-semibold'>chicago</h2>
     <p className='text-white md:w-[60%] text-lg md:text-xl font-medium'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
    
          <a className='bg-golden  btn  text-white font-bold w-52  rounded-2xl hover:bg-greener hover:text-golden' href='/reservation' >Reserve a table</a>
       

     
     </div>
     <div className='pt-20 w-[70%] md:w-[25%] md:-mb-14 -mb-10  '>
     <img alt='restaurant' src='src/assets/restauranfood.jpg'  className='rounded-3xl ' ></img>
     </div>
     </div> 
    </div>

    </>
  )
}
