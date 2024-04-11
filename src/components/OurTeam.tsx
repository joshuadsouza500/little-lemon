import React from 'react'

export const OurTeam = () => {
  return (
    <>
     <div className='flex flex-col md:flex-row-reverse mt-20 mb-10 md:pb-16 pr-1 justify-between'>
        <div className='flex flex-col gap-3 ml-4 md:pl-10  items-center md:items-baseline md:w-[50%]'>
           <h1 className='pr-4 font-josefin text-4xl md:text-5xl lg:text-6xl font-bold text-blackish  text-center md:text-left pb-6'>
               Meet The Team
            </h1>
           <p className='font-josefin text-justify text-blackish text-lg w-[95%] md:w-[80%] pb-4'>
                Our team of talented chefs pour their passion and expertise into crafting each dish with precision and care. With a dedication to preserving the authenticity of traditional cuisine, our chefs infuse every creation with the flavours of our heritage, ensuring that every bite is a delightful journey for the taste buds.
           </p>
           <a href='/reservation' className='bg-golden  btn  text-white font-bold w-44  rounded-2xl hover:bg-greener hover:text-golden'>Reserve a table</a>
        </div>
    <div className=' pt-14 md:pt-1 pr-1 flex justify-center md:flex-none md:w-2/4'>  
        <div className="carousel carousel-center max-w-md p-4 space-x-4  rounded-box shadow-md  items-center">          
          <div className="carousel-item  m-2 w-1/2">
          <div className="card bg-zinc-800 shadow-xl">
                 <figure><img src="src/assets/chef2.png" alt="chef" className=' w-[80%] mt-2' /></figure>
                 <div className="p-3 gap-0 bg-slate-100 font-josefin text-center">
                   <h2 className="text-base font-semibold">Steven Lucre</h2>
                   <p>Head Chef</p>
    
            </div>
          </div>
  
    </div> 
      <div className="carousel-item  w-1/2">
      <div className="card  bg-zinc-800 shadow-xl">
                   <figure><img src="src/assets/chef1.png" alt="chef" className='w-[60%] mt-2' /></figure>
                   <div className="p-3 gap-0 bg-slate-100 font-josefin text-center">
                     <h2 className="text-base font-semibold">Melissa Sue</h2>
                     <p>Sous Chef</p>

        </div>
      </div>

      </div> 
      <div className="carousel-item  w-1/2">
      <div className="card  bg-zinc-800 shadow-xl">
                   <figure><img src="src/assets/chef3.png" alt="chef" className='w-[82%] mt-2' /></figure>
                   <div className="p-3 gap-0 bg-slate-100 font-josefin text-center">
                     <h2 className="text-base font-semibold">Mark Wright</h2>
                     <p>Sous Chef</p>

        </div>
      </div>

      </div> 
      <div className="carousel-item  w-1/2">
      <div className="card  bg-zinc-800 shadow-xl">
                   <figure><img src="src/assets/waiter.png" alt="chef" className='w-[75%] mt-2' /></figure>
                   <div className="p-3 gap-0 bg-slate-100 font-josefin text-center">
                     <h2 className="text-base font-semibold">Sydney Kur</h2>
                     <p>Server</p>

        </div>
      </div>

      </div> 

 

</div>

        </div>
     </div>
    </>
  )
}

  
