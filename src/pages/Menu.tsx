import React from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer' 
import { FullMenu } from '../components/FullMenu'
import {menuData} from '../components/items'
export const Menu = () => {
  return (
    <>
    <NavBar />
    <FullMenu menuItems= {menuData}/>
    <Footer />
  </>
  )
}


