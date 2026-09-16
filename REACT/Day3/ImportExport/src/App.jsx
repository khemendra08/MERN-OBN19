// import kuchbhi from "./Components/Navbar"
// import name from "./Components/Navbar"
// //Named import 
// import {age} from "./Components/Navbar"
// import { age as umar } from "./Components/Navbar"
// import { city as jagh} from "./Components/Navbar"
 
// function App() {
  
//   return (
//     <>
//     <h1>{name}</h1>
//     <h1>Welcome , {kuchbhi}</h1>
//     <p>I am {umar} years old and i live in {jagh}</p>
     
//     </>
//   )
// }

// export default App





// import Navbar from "./Components/Navbar"
// import MainContent from  "./Components/MainContent"
// import Footer from "./Components/Footer"

// function App() {
//   return (
//     <div>

//       <Navbar />
//       <MainContent />
//       <Footer />
      
//     </div>
//   )
// }

// export default App








import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import HeroSection from './Components/HeroSection'

const App = () => {
  return (
    <div>

      <Navbar />
      <div style={{display : "flex"}}>

        <Sidebar />
        <HeroSection />

      </div>
      
      
    </div>
  )
}

export default App
