import React from 'react'

import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Discover } from '../components/Discover'
import { Contact } from '../components/Contact'
import { Reviews } from '../components/Reviews'

import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
export const Home = () => {
  return (
    <>
        <NavBar />
      <Hero />
  
     <Discover /> 
    <Reviews /> 
    <About />
    <Contact />
    <Footer />
    </>
  )
}
