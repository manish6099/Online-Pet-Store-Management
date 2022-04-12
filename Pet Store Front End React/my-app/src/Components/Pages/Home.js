import React from 'react'
import Categories from '../PageDesign/Categories'
import Navbar from '../PageDesign/Navbar'
import Slider from '../PageDesign/Slider'
import Footer from '../PageDesign/Footer'


const Home = () => {

  return (
    <div>
        <Navbar />
        <Slider />
        <Categories />
        <Footer />
    </div>
  )
}

export default Home