import React from 'react'
import Layout from './Layout/Layout'
import Quotes from './Quotes'
import Hero from './Hero'
import Technology from './Technology'
 
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Quotes /> 
      <Technology/>
    </Layout>
  )
}

export default Home
