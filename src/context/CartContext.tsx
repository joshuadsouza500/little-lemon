import React, { useState } from 'react';
import { createContext, useContext } from "react"

type cartItem = {
    id: number,
    quantity : number
    price : number
    subTotal : number
}

type menuItem = {
    id:number,
    img : HTMLImageElement ,
    title : string,
    ing : string,
    price: string
    quantity: number
    
}

type CartContext = {
    cart: any,
    handleCart :(menuItem: menuItem) => any ,
    increaseCart :(id:number) => void,
    decreaseCart :(id:number) => void,
    removeItem :(id:number) => void,
    cartQuantity : number
    TotalAmount : string
    isEmpty: any
    isAdded : any
}   

const CartContext = createContext({} as CartContext)

export function useCartContext(){
    return useContext(CartContext);
}

export function CartProvider ({children}){
  
    const [cart , setCart] = useState<cartItem[]>([]); 
    
    const [isAdded,setIsadded] = useState(false)
    const [isEmpty,setIsempty] = useState(true)

    function handleCart(menuItem) {
        let exist = false;
        cart.forEach((item) => {
          if (item.id === menuItem.id) {
            exist = true;
          }
        });
        if (exist) {
          setIsadded(true)

          setTimeout(()=>{
            setIsadded(false)}, 2000
          )

          return ;
                }
        const newItem = { ...menuItem, quantity: 1  };
        setCart([...cart, newItem]);
        setIsempty(false)
    }

    function increaseCart(id:number){
        setCart(currItems => {
            return currItems.map(item => { 
                if (item.id === id)
                    return {...item, quantity: item.quantity + 1,  }
                else
                    return item;
            })
        })
    }

    function decreaseCart(id: number){
        setCart(currItems => {
            return currItems.map(item => { 
                if (item.id === id && item.quantity > 0) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            }).filter(item => item.quantity > 0); // Remove items with quantity 0
        })
    }

    function removeItem(id: number){
        setCart(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    const cartQuantity = cart.reduce((quantity, item) => quantity + item.quantity, 0)
    const cartTotal = cart.reduce((quantity, item) =>quantity + item.price * item.quantity , 0)
    const TotalAmount = cartTotal.toFixed(2)
    
    
    
   
    return (
        <CartContext.Provider value={{ cart, handleCart, increaseCart, decreaseCart, removeItem, cartQuantity, TotalAmount, isEmpty, isAdded}}>
            {children}
        </CartContext.Provider>
    )
}