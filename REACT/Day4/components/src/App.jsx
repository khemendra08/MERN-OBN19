// import React from 'react'
// import Card from './Componenets/Card'

// const App = () => {

//   const people = [
//       {
//         name: "John Doe",
//         imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
//       },
//       {
//         name: "Jane Smith",
//         imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
//       },
//       {
//         name: "Michael Johnson",
//         imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
//       },
//       {
//         name: "Emily Davis",
//         imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
//       },
//       {
//         name: "Chris Brown",
//         imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598"
//       }
//   ];


//   return (
//     <div>
//       {
//         people.map((item) => {

//           return <Card imgSrc={item.imageUrl} name={item.name} />
//           // return (
//           //   <div>
//           //     <img src={ item.imageUrl} alt="" />
//           //     <p>{item.name}</p>
//           //   </div>

//           // )

//         })
//       }

//     </div>
    
//   )
// }

// export default App







//Event in jsx 
// import React from 'react'

// const App = () => {
//   return (
//     <div>

//       <button onClick={() => {
//         console.log("Button Clicked")
//       }}>Click Me</button>
      
//     </div>
//   )
// }

// export default App

//Good practice to use event in jsx 
import React from 'react'

const App = () => {

  function btnClickHandler()
  {
    console.log("Button Clicked")
  }


  return (
    <div>
      <button onClick={btnClickHandler}>Click Me2</button>
    </div>
  )
}

export default App
