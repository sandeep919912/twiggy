import React from 'react'
import Banner from '../Components/HomeComponents/Banner'
import WhyChooseUs from '../Components/HomeComponents/WhyChooseUs'
import PopularDishes from '../Components/HomeComponents/PopularDishes'
// import Footer from '../Components/Common/Footer'

const Home = () => {
  return (
    <div>
      <Banner/>
      <WhyChooseUs/>
      <PopularDishes/>
    </div>
  )
}

export default Home