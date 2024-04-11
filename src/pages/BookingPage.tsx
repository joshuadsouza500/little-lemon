import React, { useReducer} from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { BookingForm } from '../components/BookingForm'



export const BookingPage = () => {
  
  const initialState = [
    "10:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "4:00 PM",
    "5:00 PM",
    "7:00 PM",
  ];

  const seededRandom = seed => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
  
    return () => (s = s * a % m) / m;
  };

  const fetchAPI =(date)=> {
    let result = ['']
      let random = seededRandom(date.getDate());
  
      for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) result.push(i + ':00');
        if(random() < 0.5) result.push(i + ':30');
      }
    
      return result;
  };

  const submitAPI = formData => true;

  const submitData = (formData) => {
    const response = submitAPI(formData);    
  };

          const reducer = (state: any, action: { type: any; times: any }) =>{
            switch(action.type) {
            case "Update_times":
            
              return action.times;
              default:
              return state;
            }
          }


  const [availableTimes, dispatch] = useReducer(reducer, initialState);

    const updateTimes =(date: any) =>{
      const times = fetchAPI(date)
      dispatch({ type: "Update_times", times });
    };
    
   const initializeTimes = (date: any) =>{
    const today = new Date();
    const times = fetchAPI(today);
    dispatch({ type: "Update_times", times });

  

 
     
    
}

  return (
    <>
        <NavBar />
        <BookingForm availableTimes ={availableTimes} updateTimes= {updateTimes} submitData={submitData} />
       <Footer />
    </>
  )
}

