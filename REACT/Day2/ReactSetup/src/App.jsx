import React from "react"


// function App() {
//   return (
//     <h1>Ok</h1>
//   )

// }



// const App = () => {
//   return (
//     <nav>
//       <h3>LOGO</h3>

//       <div>
//         <a href="">A</a>
//         <a href="">B</a>
//         <a href="">C</a>
//       </div>
//     </nav>
//   )
// }




// const App = () => { //JSX expressions must have a common  parent  
//   return (

//     <div>
//       <ul>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>

//       <div></div>
//     </div>

//   )
// }


function App() 
{
  return (
    <>

    <Navbar />
    {/* { Navbar() } */}


    <MainContent />

    <Footer />




    </>
  )
}

function Navbar()
{
  let name = "Khemendra"

  return <nav>Welcome, {name}</nav>
}

function MainContent()
{
  return <main>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, aliquam? Molestiae laborum, mollitia expedita doloribus aut vitae commodi ex eligendi veritatis et porro enim repellendus assumenda id quaerat repellat aperiam.
    Illo mollitia neque accusantium in minus exercitationem ducimus sit. Commodi eligendi nihil delectus cumque dolorum omnis pariatur hic incidunt? Esse, aspernatur est similique tenetur numquam vel eos voluptate dolor voluptates.
    Ea excepturi accusamus magnam perspiciatis voluptas iste quaerat eius non magni. Nostrum veritatis tenetur alias suscipit! Exercitationem inventore dolorum, sit nemo dolor commodi maxime molestias? Voluptatibus corrupti molestias esse nemo.
    Tempora animi labore molestias explicabo nisi est maiores accusamus saepe tenetur. Ex, vel totam? Accusantium soluta enim fugiat eveniet hic laborum qui in? Quis quo qui vero esse iure repudiandae.
    Enim incidunt suscipit, dolor dolorum facilis ullam doloremque molestias delectus atque voluptatum hic asperiores odit maxime beatae nobis odio provident aut pariatur dolores ea impedit repudiandae corporis! Quisquam, necessitatibus numquam.
  </main>
}


function Footer()
{
  return <footer>This is my footer</footer>
}

export default App

