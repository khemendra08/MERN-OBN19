import React, { useState } from 'react'
import Counter from "./Components/Counter"
import Text from './Components/Text'
import Sidebar from './Components/Sidebar'

const App = () => {

  const[darkMode, setdarkMode] = useState(false)



  return (
    <div style={{
      backgroundColor : (darkMode ? "grey" : "white")
    }}>

      <nav>
        {/* <button onClick={()=>{
          setdarkMode(!darkMode)
        }}>Light</button>
        <button onClick={()=>{
          setdarkMode(!darkMode)
        }}>Dark</button> */}


        <button 

          onClick={()=>{
            setdarkMode(!darkMode)

          }}

        >
          {darkMode ? "light" : "Dark" }

        </button>
      </nav>
      
      <div style={{display : "flex"}}>
        
        <Sidebar />

        <div>

          <Counter />
          <hr />
          <Text />

        </div>

      </div>
    </div>
  )
}

export default App
