import React, { ChangeEventHandler, useState } from 'react'

export const BookingForm = ({availableTimes, updateTimes, submitData}) => {


  

 const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const selectedDate= event.target.value
     
    updateTimes(selectedDate)
    }


 const [emailValue, setEmailvalue] = useState('');
 const [dinerValue, setDinervalue] = useState('');
 const [occasionValue, setOccasionvalue] = useState('');


 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setEmailvalue(value) 
}
 const dinerChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
   setDinervalue(event.target.value)
 }
const occChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
  setOccasionvalue(event.target.value)
}



const handleForm =(e)=>{
  e.preventDefault();

  if (emailValue.trim() === "") {
    alert("Please enter a valid email");
    return;
  }

   submitData({  emailValue, dinerValue, occasionValue, });
  
}






  return (
    <>
      <div className='flex justify-center items-start pt-16 md:pt-24 text-center'>
            <a href='/' className='btn btn-circle bg-golden md:ml-6 m-4 absolute left-0 hover:bg-greener'> ❮ </a>
           
            <h1 className='font-alex text-golden text-6xl lg:text-7xl text-center pb-6 pr-4'>
                   Book A Table            
              </h1>
              </div> 
      <div className='flex justify-center  lg:h-4/5 m-5 pb-10'>
        <form   className='w-9/12 md:w-10/12 lg:w-8/12 bg-greener rounded-2xl font-josefin flex flex-col items-start sm:items-center pl-6 md:pl-3 py-8 md:py-16' onSubmit={handleForm}>
         
       {/*Date*/}

      <div className='sm:grid grid-cols-2 gap-x-10 gap-y-4 pb-2 pr-4'>
          <div className='mb-4  md:w-full '> 
            <label htmlFor='date' className="block text-white text-sm font-bold mb-2">Date:</label>
            <input id='date' type="date"   className="input input-bordered w-full max-w-xs" onChange={handleDateChange} required  />
          </div>

        {/*Timings*/}

         <div className='mb-4 md:w-full '>
            <label htmlFor='time' className="block text-white text-sm font-bold mb-2">Timings:</label>
            <select id='time' className="select select-bordered w-full max-w-xs" >
              {availableTimes.map((time:any,index:any)=> (
              <option key={index} value={time}>{time}</option>
            ))}
            </select>
          </div>
          
          {/*DIners*/}
          <div className='mb-4  md:w-full '>
            <label htmlFor='diners' className="block text-white text-sm font-bold mb-2">No: of Diners:</label>
            <select id = 'diners' className="select select-bordered w-full max-w-xs" value={dinerValue} onChange={dinerChange}  required>
              <option>1</option>
              <option>2-4</option>
              <option>4-6</option>
              <option>More than 6</option>
            </select>
            
          </div>
          
          {/*Email*/}
          <div className='mb-4  md:w-full '> 
            <label htmlFor='email' className="block text-white text-sm font-bold mb-2">E-mail:</label>
            <input  id='email' type="email" placeholder="Johndoe@email.com"  value={emailValue} onChange={handleChange}  className="input  input-bordered w-full max-w-xs" minLength={4}/>
            
          </div>
     </div>
     {/*occasion*/}
          <div className='mb-4 grid '> 
            <label htmlFor='occasion' className="block text-white text-sm font-bold mb-2">Occasion</label>
          <textarea id='occasion' className="textarea textarea-bordered w-56 sm:w-96 lg:w-zz" placeholder="Type here" value={occasionValue} onChange={occChange} ></textarea>
        
         </div>
         
         <div className="ml-6 self-start sm:self-center mt-4 ">
           <button className="bg-golden hover:bg-greener hover:text-golden text-white font-bold py-2 px-4 rounded border-golden border w-32" type="button">
             Book ❯
           </button>
          
         </div>     
   </form>
      </div>
    </>
  )
}
