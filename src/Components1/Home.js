import React from 'react'
import Layout from './Layout/Layout'
import Quotes from './Quotes'
import Hero from './Hero'
import Technology from './Technology'
import Certification from './Certification'
 
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Quotes /> 
      {/* <Certification/> */}
      <Technology/>
    </Layout>
  )
}

export default Home
