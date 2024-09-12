import React from 'react'
import Hero from './Hero'
import ItemSliders from './ItemSliders'

function Home(props) {
  return (
    <>
      <Hero />
      <ItemSliders screenWidth={props.screenWidth}/>

    </>
  )
}

export default Home
