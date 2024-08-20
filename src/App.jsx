import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Icons from './Components/Icons'
import Specification from './Components/Specification'
import Case from './Components/Case'
import Products from './Components/Products'
import ProductSection from './Components/ProductSection'
import Footer from './Components/Footer'

function App() {

  return (
  <>
  <Navbar/>
  <Main/>
  <Icons/>
  <Specification/>
  <Case/>
  <Products/>
  <ProductSection/>
  <Footer/>

  </>
  )
}

export default App
