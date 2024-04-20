import React from 'react'
import { useNavigate } from 'react-router-dom'


interface props{
    id:number
    img: string | undefined
    
    title:string
    para:string
    ing: string
    price: number
}


export const FullMenu = ({menuItems}) => {
  
  const navigate = useNavigate();

 
  
  return (
    <>
  <div className='pt-20 md:pt-28'>
           
            <h1 className='font-alex text-golden text-6xl lg:text-7xl text-center pb-6 pr-4'>
                  Menu           
              </h1>
              </div> 
      <div className='p-5 bg-greener bg-opacity-90 mb-5 md:mb-10'>
        <ul className='flex justify-around text-white font-josefin text-base md:text-lg '>
          <li className='hover:scale-105 hover:text-golden'> <a href='#specials'>Specials</a></li>
          <li className='hover:scale-105 hover:text-golden'> <a href='#starters'>Starters</a></li>
          <li className='hover:scale-105 hover:text-golden'> <a href='#mains'   >Mains</a></li>
          <li className='hover:scale-105 hover:text-golden'> <a href='#desserts'>Desserts</a></li>
          <li className='hover:scale-105 hover:text-golden'> <a href='#drinks'  >Drinks</a></li>
        </ul>
      </div>
       
       <div id='specials' className='px-2 py-5'>
        <h1 className='font-josefin text-golden text-5xl lg:text-6xl text-start ml-6 md:ml-20 pb-6 pr-2 font-semibold'>Weekly Specials</h1>
       </div>


        <div className=' text-blackish font-josefin '>
          <div className='grid  md:grid-cols-2 gap-4 md:gap-8 ml-4 mr-2 md:ml-14 lg:ml-20'>
          {menuItems.slice(0,3).map((item:props) => (
             <div className="card card-side bg-base-100 shadow-xl w-96 lg:w-zz hover:scale-[1.005] " key={item.id}>
                <div className='bg-greener rounded-lg self-center py-5'>
               <figure className=''><img src={item.img} alt="food" className='p-1'/></figure>
               </div>
               <div className="pl-4 self-center">
                 <h2 className="card-title p-2">{item.title}</h2>
                 <p className="pl-2 text-sm pb-3 font-normal leading-none md:leading-tight w-[92%]">{item.para}</p>
                 <div className='grid grid-cols-2 sm:place-items-start mr-6 mb-2 items-center'>
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
       
        
        <div id="starters" className='p-8 mt-4 md:mt-8'>
        <h1 className='font-semibold font-josefin text-golden text-5xl lg:text-6xl text-start ml-10 md:ml-20 pb-6 pr-4'>Starters</h1>
       </div>
        <div className=' text-blackish font-josefin'>
          <div className='grid  md:grid-cols-2 gap-4 md:gap-8 ml-4 mr-2 md:ml-14 lg:ml-20'>
          {menuItems.slice(6,9).map((item:props) => (
             <div className="card card-side bg-base-100 shadow-xl w-96 lg:w-zz hover:scale-[1.005] " key={item.id}>
                <div className='bg-greener rounded-lg self-center py-5'>
               <figure className=''><img src={item.img} alt="food" className='p-1'/></figure>
               </div>
               <div className="pl-4 self-center">
                 <h2 className="card-title p-2">{item.title}</h2>
                 <p className=" pl-2 text-sm pb-2 font-normal leading-none w-[92%]">{item.para}</p>
                 <div className='grid grid-cols-2 sm:place-items-start mr-6 mb-2 items-center'>
                 <h6 className="text-golden text-base md:text-lg font-bold pl-2 "> ${ item.price}</h6>
                 <button className='btn btn-sm bg-golden hover:bg-greener text-white ' onClick ={()=>{
                  const path =`/${item.id}`      
                  navigate(path)}} >Add To Cart</button>
                  </div>

               </div>
              </div>

              ))}
           </div>
          
        </div>
        
        <div id='mains' className='p-8 mt-4 md:mt-8'>
        <h1 className=' font-semibold font-josefin text-golden text-5xl lg:text-6xl text-start ml-10 md:ml-20 pb-6 pr-4'>Mains</h1>
       </div>
        <div className=' text-blackish font-josefin'>
          <div className='grid  md:grid-cols-2 gap-4 md:gap-8 ml-4 md:ml-14 lg:ml-20'>
          {menuItems.slice(0,6).map((item:props) => (
             <div className="card card-side bg-base-100 shadow-xl w-96 lg:w-zz hover:scale-[1.005] " key={item.id}>
                <div className='bg-greener rounded-lg self-center py-5'>
               <figure className=''><img src={item.img} alt="food" className='p-1'/></figure>
               </div>
               <div className="pl-4 self-center">
                 <h2 className="card-title p-2">{item.title}</h2>
                 <p className="pl-2 text-sm pb-2 font-normal leading-none w-[92%]">{item.para}</p>
                 <div className='grid grid-cols-2 sm:place-items-start mr-6 mb-2 items-center'>
                 <h6 className="text-golden text-base md:text-lg font-bold pl-2 ">${item.price}</h6>
                 <button className='btn btn-sm bg-golden hover:bg-greener text-white ' onClick ={()=>{
                  const path =`/${item.id}`      
                  navigate(path)}} >Add To Cart</button>
                  </div>

               </div>
              </div>

              ))}
           </div>
          
        </div>

        <div id='desserts' className='p-8 mt-4 md:mt-8'>
        <h1 className='font-semibold font-josefin text-golden text-5xl lg:text-6xl text-start ml-10 md:ml-20 pb-6 pr-4'>Desserts</h1>
       </div>
        <div className=' text-blackish font-josefin'>
          <div className='grid  md:grid-cols-2 gap-4 md:gap-8 ml-4 md:ml-14 lg:ml-20'>
          {menuItems.slice(9,12).map((item:props) => (
             <div className="card card-side bg-base-100 shadow-xl w-96 lg:w-zz hover:scale-[1.005] " key={item.id}>
                <div className='bg-greener rounded-lg self-center py-5'>
               <figure className=''><img src={item.img} alt="food" className='p-1'/></figure>
               </div>
               <div className="pl-4 self-center">
                 <h2 className="card-title p-2">{item.title}</h2>
                 <p className="pl-2 text-sm pb-2 font-normal leading-none w-[92%]">{item.para}</p>
                 <div className='grid grid-cols-2 sm:place-items-start mr-6 mb-2 items-center'>
                 <h6 className="text-golden text-base md:text-lg font-bold pl-2 ">${item.price}</h6>
                 <button className='btn btn-sm bg-golden hover:bg-greener text-white ' onClick ={()=>{
                  const path =`/${item.id}`      
                  navigate(path)}} >Add To Cart</button>
                  </div>

               </div>
              </div>

              ))}
           </div>
          
        </div>

        <div id='drinks' className='p-8 mt-4 md:mt-8'>
        <h1 className='font-semibold font-josefin text-golden text-5xl lg:text-6xl text-start ml-10 md:ml-20 pb-6 pr-4'>Drinks</h1>
       </div>
       <div className='flex flex-col items-center justify-around md:flex-row-reverse '>
        <div className='mb-14'>
        <img src ="src/assets/photo-collage.png.png" className='w-80 md:w-96 ' ></img>
        
        </div>
        
       
        <div className=' text-blackish font-josefin ml-8 mb-10 '>
          <h5 className='text-xl md:text-2xl  mt-3'>Caribbean</h5>
          <span className='opacity-90 font-light  md:text-lg pl-3  '>Grenadine syrup / vanilla ice cream / Avocado / honey.</span>
          <h5 className='text-xl md:text-2xl  mt-3'> Margarita</h5>
          <span className='font-light opacity-90 md:text-lg pl-3'>Lime / syrup / triple sec / honey.</span>
          <h5 className='text-xl md:text-2xl  mt-3'>Pina Colada</h5>
          <span className='opacity-90 font-light  md:text-lg pl-3'>Coconut cream / Pineapple juice / Rum / Pineapple wedge for garnish.</span>
          <h5 className='text-xl md:text-2xl  mt-3'>Mojito</h5>
          <span className='opacity-90 font-light  md:text-lg pl-3'>Fresh and zesty with a burst of lime and refreshing mint.</span>
          <h5 className='text-xl md:text-2xl  mt-3'> Water</h5>
          <span className='opacity-90 font-light  md:text-lg pl-3'>Mineral / Sparkling</span>
          <h5 className='text-xl md:text-2xl  mt-3'> Soft Drinks</h5>
          <span className='opacity-90 font-light  md:text-lg pl-3'>Cola / Fanta / Pepsi / Sprite.</span>
          
        </div>
        </div>
    </>
  )
}