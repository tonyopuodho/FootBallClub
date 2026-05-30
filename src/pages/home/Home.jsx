import React from 'react'
import Hero from './Hero'
import Events from './Events'
import Titles from './Titles'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div>
        <Hero/>
        <Events/>
        <Titles/>
        <Footer/>
    </div>
  )
}

export default Home