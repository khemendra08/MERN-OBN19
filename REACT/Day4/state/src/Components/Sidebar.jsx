
import React, { useState } from 'react'

const Sidebar = () => {

    //let isMouseInSidebar = true
    const[isMouseInSidebar , setisMouseInSidebar ] = useState(false)


  return (
    <div>
        <aside 
            onMouseEnter={()=>{
                //console.log("Enter")
                //isMouseInSidebar = true
                setisMouseInSidebar(true)

            }}

            onMouseLeave={()=>{
                //console.log("Leave")
                //isMouseInSidebar = false
                setisMouseInSidebar(false)
            }}
            
            style={{
                height : "100vh", 
                width : isMouseInSidebar ? "20vw" : "5vw", 
                backgroundColor : "pink" 
            }}
        >

        </aside>
    </div>
  )
}

export default Sidebar
