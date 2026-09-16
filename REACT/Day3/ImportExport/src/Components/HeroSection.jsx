import React from 'react'
import Card from './Card'

const HeroSection = () => {
  return (
    <div>
        <main style={{height : "92vh", backgroundColor : "AccentColor", width : "80vw", display : "grid", gridTemplateColumns : "1fr 1fr 1fr", gap : "20px"}}>

            <Card price = {100} name = "Laptop" />
            <Card price = {100} name = "Mobile" />
            <Card price = {100} name = "PowerBank" />
            <Card price = {100} name = "Bike" />
            <Card price = {100} name = "Cycle" />
            {/* <Card price = {100} name = "Car" /> */}
            {Card({name : "Fold", price : "399999"})}

        </main>
      
    </div>
  )
}

export default HeroSection
