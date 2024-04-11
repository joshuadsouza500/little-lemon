import React from 'react'

export const Contact = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row  pt-20 pb-10 pr-2 justify-between'>
        <div className='flex flex-col gap-3 ml-8 md:ml-28 pr-2  md:pr-0 items-center md:items-start'>
           <h1 className='font-alex text-golden text-6xl lg:text-7xl text-center md:text-left pr-4 -ml-8'>
              Say Hello
           </h1>
           <h1 className='pr-4 font-josefin text-4xl md:text-5xl lg:text-6xl font-bold text-blackish  text-center md:text-left pb-6 '>
              Contact Us
           </h1>
           <div className='font-josefin text-blackish font-normal ml-2 flex flex-col gap-4 pb-7'>
          <span>
              <span className='font-bold text-lg -ml-1'>Call Us:</span>
              <br/>
              (415) 123-4567<br/>
              (415) 453-6724<br/>
          </span>
          <span >
          <span className='font-bold text-lg -ml-1'>Location:</span> <br/>
            Moxhe 118a Macpherson Street Bronte,<br/> Chicago 2024<br/> 
          </span>
          <span>
              <span className='font-bold text-lg -ml-1'>Hours of Operation:</span><br/> 
                Sunday:      Closed<br/>
                Monday:      Closed<br/>
                Tuesday - Saturday:   9:00 am - 6:00 pm
          </span>
          </div>
          <a href='/reservation' className='bg-golden  btn  text-white font-bold w-44  rounded-2xl hover:bg-greener hover:text-golden'>Reserve a table</a>
        </div>
        <div className='px-8 ml-8 md:ml-1 pt-14 md:pt-24 w-[90%] md:w-[60%] lg:w-[45%] lg:mr-20'>
          <img src='src/assets/map.png' className='rounded-2xl' ></img>
        </div>
     </div>
    </>
  )
}
