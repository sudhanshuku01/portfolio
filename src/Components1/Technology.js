import React from 'react'
import htmlimg from '../images/html.png'
import cssimg from '../images/css.png'
import jsimg from '../images/js.png'
import reactimg from '../images/structure.png'
import nodeimg from '../images/node-js.png'
import  nextjsimg from '../images/Next.js.png'
import  andimg from '../images/andstd.png'
import  javaimg from '../images/java.png'
import  pythonimg from '../images/python.png'

const Technology = () => {
  return (
    <section className='technology'>
        <h1>Technology I Know</h1>
        <div className='technology-images'>
            <img src={htmlimg} alt="" />
            <img src={cssimg} alt="" />
            <img src={jsimg} alt="" />
            <img src={reactimg} alt="" />
            <img src={nodeimg} alt="" />
        </div>
    </section>
  )
}

export default Technology
