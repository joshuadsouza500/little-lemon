import React from 'react'

interface props{
    id:number
    img: string | undefined
    
    title:"string",
    para:"string",
    price: "string",
    

}

export const FullMenu = ({menuItems}) => {
  return (
    <>
  <div className='flex justify-center items-start pt-16 md:pt-24 text-center'>
            <a href='/' className='btn btn-circle bg-golden md:ml-8 m-4 absolute left-0 hover:bg-greener'> ❮ </a>
           
            <h1 className='font-alex text-golden text-6xl lg:text-7xl text-center pb-6 pr-4'>
                  Menu           
              </h1>
              </div> 
      <div className='p-5 bg-greener bg-opacity-90 mb-5 md:mb-10'>
        <ul className='flex justify-around text-golden font-josefin text-lg'>
          <li className='hover:scale-105'> <a href='#specials'>Specials</a></li>
          <li className='hover:scale-105'> <a href='#starters'>Starters</a></li>
          <li className='hover:scale-105'> <a href='#mains'   >Mains</a></li>
          <li className='hover:scale-105'> <a href='#desserts'>Desserts</a></li>
          <li className='hover:scale-105'> <a href='#drinks'  >Drinks</a></li>
        </ul>
      </div>
       
       <div id='specials' className='p-5'>
        <h1 className='font-josefin text-golden text-5xl lg:text-6xl text-start ml-10 md:ml-20 pb-6 pr-4 font-semibold'>Weekly Specials</h1>
       </div>


        <div className=' text-blackish font-josefin '>
          <div className='grid  md:grid-cols-2 gap-4 md:gap-8 ml-6 md:ml-14 lg:ml-20'>
          {menuItems.slice(0,3).map((item:props) => (
             <div className="card card-side bg-base-100 shadow-xl w-96 lg:w-zz hover:scale-[1.005] ">
                <div className='bg-greener rounded-lg self-center py-5'>
               <figure className=''><img src={item.img} alt="food" className='p-1'/></figure>
               </div>
               <div className="pl-4 self-center">
                 <h2 className="card-title p-2">{item.title}</h2>
                 <p className=" pl-2 text-sm pb-2 font-normal leading-none md:leading-tight w-[90%]">{item.para}</p>
                 <h6 className="text-golden text-sm md:text-base font-bold ">{item.price}</h6>

               </div>
              </div>

              ))}
           </div>
          
        </div>
       
        
        <div id="starters" className='p-8 md:mt-8'>
        <h1 className='font-semibold font-josefin text-golden text-5xl lg:text-6xl text-start ml-10 md:ml-20 pb-6 pr-4'>Starters</h1>
       </div>
        <div className=' text-blackish font-josefin'>
          <div className='grid  md:grid-cols-2 gap-4 md:gap-8 ml-6 md:ml-14 lg:ml-20'>
          {menuItems.slice(6,9).map((item:props) => (
             <div className="card card-side bg-base-100 shadow-xl w-96 lg:w-zz hover:scale-[1.005] ">
                <div className='bg-greener rounded-lg self-center py-5'>
               <figure className=''><img src={item.img} alt="food" className='p-1'/></figure>
               </div>
               <div className="pl-4 self-center">
                 <h2 className="card-title p-2">{item.title}</h2>
                 <p className=" pl-2 text-sm pb-2 font-normal leading-none w-[90%]">{item.para}</p>
                 <h6 className="text-golden text-sm md:text-base font-bold ">{item.price}</h6>

               </div>
              </div>

              ))}
           </div>
          
        </div>
        
        <div id='mains' className='p-8 md:mt-8'>
        <h1 className=' font-semibold font-josefin text-golden text-5xl lg:text-6xl text-start ml-10 md:ml-20 pb-6 pr-4'>Mains</h1>
       </div>
        <div className=' text-blackish font-josefin'>
          <div className='grid  md:grid-cols-2 gap-4 md:gap-8 ml-6 md:ml-14 lg:ml-20'>
          {menuItems.slice(0,6).map((item:props) => (
             <div className="card card-side bg-base-100 shadow-xl w-96 lg:w-zz hover:scale-[1.005] ">
                <div className='bg-greener rounded-lg self-center py-5'>
               <figure className=''><img src={item.img} alt="food" className='p-1'/></figure>
               </div>
               <div className="pl-4 self-center">
                 <h2 className="card-title p-2">{item.title}</h2>
                 <p className="pl-2 text-sm pb-2 font-normal leading-none w-[90%]">{item.para}</p>
                 <h6 className="text-golden text-sm md:text-base font-bold ">{item.price}</h6>

               </div>
              </div>

              ))}
           </div>
          
        </div>

        <div id='desserts' className='p-8 md:mt-8'>
        <h1 className='font-semibold font-josefin text-golden text-5xl lg:text-6xl text-start ml-10 md:ml-20 pb-6 pr-4'>Desserts</h1>
       </div>
        <div className=' text-blackish font-josefin'>
          <div className='grid  md:grid-cols-2 gap-4 md:gap-8 ml-6 md:ml-14 lg:ml-20'>
          {menuItems.slice(9,12).map((item:props) => (
             <div className="card card-side bg-base-100 shadow-xl w-96 lg:w-zz hover:scale-[1.005] ">
                <div className='bg-greener rounded-lg self-center py-5'>
               <figure className=''><img src={item.img} alt="food" className='p-1'/></figure>
               </div>
               <div className="pl-4 self-center">
                 <h2 className="card-title p-2">{item.title}</h2>
                 <p className="pl-2 text-sm pb-2 font-normal leading-none w-[90%]">{item.para}</p>
                 <h6 className="text-golden text-sm md:text-base font-bold ">{item.price}</h6>

               </div>
              </div>

              ))}
           </div>
          
        </div>

        <div id='drinks' className='p-8 md:mt-8'>
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