import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer' 
import { Dish } from '../components/Dish'
import { Recommended } from '../components/Recommended'
import {menuData} from '../components/items'


export const DishPage = () => {


 

  return (
    <>
    <NavBar  />
    <Dish menuItems = {menuData}  />
    <Recommended menuItems = {menuData} />
    <Footer />
  </>
  )
}


