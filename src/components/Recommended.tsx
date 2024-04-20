import React from 'react'
import { useNavigate } from 'react-router-dom'



export const Recommended = ({menuItems}) => {

  const navigate = useNavigate();

    return (
    <>
         <div id='specials' className='p-5 mt-20'>
         <div className='grid md:grid-cols-2 justify-center place-items-center mb-6'>   
        <h1 className='font-josefin text-5xl lg:text-6xl text-start ml-2 pb-6 pr-2 font-bold text-blackish'>Recommended</h1>
        <button className="md:-mt-6 btn w-48 btn-ghost p-2 text-lg border-2 border-greener rounded-xl hover:bg-greener text-blackish hover:text-white" ><a href='/menu' >Show More</a></button>
        
        </div>
        </div>


        <div className=' text-blackish font-josefin mb-10'>
          <div className='grid  md:grid-cols-2 gap-4 md:gap-8 ml-4 mr-2 md:ml-14 lg:ml-20'>
            
          {menuItems.slice(3,6).map((item,index) => (
             <div className="card card-side bg-base-100 shadow-xl w-96 lg:w-zz hover:scale-[1.005] " key={index}>
                <div className='bg-greener rounded-lg self-center py-5'>
               <figure className=''><img src={item.img} alt="food" className='p-1'/></figure>
               </div>
               <div className="pl-4 self-center">
                 <h2 className="card-title p-2">{item.title}</h2>
                 <p className=" pl-2 text-sm pb-2 font-normal leading-none md:leading-tight w-[90%]">{item.para}</p>
                 <div className='grid grid-cols-2 sm:place-items-start mr-6 my-2 items-center'>
                 <h6 className="text-golden text-base md:text-lg font-bold pl-2 ">${item.price}</h6>
                 <button className='btn btn-sm bg-golden hover:bg-greener text-white ' onClick={()=>{
                  const path = `/${item.id}` 
                   navigate(path)}} >Add To Cart</button>
                  </div>
               </div>
              </div>

              ))}
           </div>
          
        </div>
    </>
  )
}
