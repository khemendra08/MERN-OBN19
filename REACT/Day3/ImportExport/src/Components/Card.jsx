// import React from 'react'

// const Card = (props) => {
//     //console.log(props.name)
//   return (
//     <article style={{ backgroundColor : "turquoise"}}>
//        <h1>{props.name}</h1>
//        <p>{props.price}</p>

//     </article>
//   )
// }

// export default Card







import React from 'react'

const Card = (props) => {
    const {name, price} = props
  return (
      
    <article style={{backgroundColor : "azure"}} >
        <h1>{name}</h1>
        <p>{price}</p>
    </article>
  )
}

export default Card





//destructuring on the fly
// import React from 'react'

// const Card = ({name, price}) => {
//   return (
//     <article style={{backgroundColor : "chocolate"}}>
//         <h1>{name}</h1>
//         <p>{price}</p>

//     </article>
//   )
// }

// export default Card
