import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import OurPolice from '../Components/OurPolice'
import NewsLetterBox from '../Components/NewsLetterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolice/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home
