import React, { useState } from 'react'

import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer' 
import { Cart } from '../components/Cart'

export const CartPage = () => {

         

  return (
    <div className="flex flex-col min-h-screen">
    <NavBar />
    <Cart />
    <div className="mt-auto">
      <Footer />
    </div>
  </div>
  )
}
