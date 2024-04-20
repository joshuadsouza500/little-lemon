import React, { useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { useCartContext } from '../context/CartContext';



export const Dish = ({ menuItems }) => {
    const { id } = useParams<{ id: string }>();
    const menuItem = menuItems.find(item => item.id.toString() === id);

    if (!menuItem) {
        return <div>No menu item found for id {id}</div>;
    }
   
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [location])
    
    const {handleCart, isAdded} = useCartContext()
    return (
        <>
        
            <div className='pt-20 px-4 lg:p-14 items-center h-full mr-1'>
            {isAdded && <div role="alert" className=' absolute top-14 right-0 md:w-[40%] px-4 py-10 text-center mx-2 text-2xl bg-red-700 rounded-xl mt-10 text-white '>
                              <span>Item already added to cart!</span>
                        </div>}
            
            <div className="bg-base-100 shadow-lg grid md:grid-cols-2 md:mt-10 mt-2">
              
                <div className='bg-greener py-5 px-20 rounded-lg'>
                    <figure className=''><img src={menuItem.img} alt="food" className='p-1' /></figure>
                </div>

                {/*Card details*/}

                <div className=" pl-4 md:pl-16 pt-10 md:pt-12 font-josefin text-blackish">
                    <h2 className=" p-2 -ml-2 font-black text-5xl mb-4 ">{menuItem.title}</h2>

                    <h6 className='pl-2 text-2xl mb-2 font-semibold
                     leading-normal '>Ingredients</h6>
                    <p className="pl-2 text-base mb-4 md:mb-6 font-normal w-[95%] md:w-[90%]">{menuItem.ing}</p>


                    <h6 className='pl-2 text-2xl  font-semibold
                    leading-normal'>Price</h6>
                    
                    <div className='grid grid-cols-1 sm:place-items-start mr-8 items-center mb-10'>

                        
                        <h6 className="text-golden text-2xl font-bold pl-2 mb-4">${menuItem.price}</h6>
                        
                        <button className='btn btn-wide bg-golden hover:bg-greener text-white text-xl ' onClick={() => {
                          handleCart(menuItem)
                        }} >Add To Cart</button>
                    
            
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Dish;