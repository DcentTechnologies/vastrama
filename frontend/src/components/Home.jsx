import React from 'react'
import Navbar from './Navbar'
import Sale from "./Sale"
import Banner from "./Banner"
import Footer from './Footer'
import Categories from './Categories'
import Subscription from './Subscription'
import Recommendations from './Recommedation'

const Home = () => {
  return (
    <>
    <Sale />
   <Navbar />
   <Banner />
   <Categories />
   <Recommendations />
   <Subscription />
   <Footer />
   </>
  )
}

export default Home