import React from 'react'
import Layout from './Layout/Layout'
import { useMode } from './Context/Mode'
import Hero from './Hero'
const Home = () => {
  const [lm,setLm]=useMode()
  
  return (
    <Layout>
     <Hero />
    </Layout>
  )
}

export default Home
