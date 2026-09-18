import { useState } from 'react'
//console.log(React)
//console.log(React.useState)

const Counter = () => {

    //let count = 0 // var, let , const
    let [count, setCount] = useState(0) //[state, function]
    



  return (
    <div>
        <div>{count}</div>

        <div>
            <button onClick={() => {
                //count++
                setCount(count+1)
                
            }}>+</button>
            <button onClick={() => {
                //count=0
                setCount(0)
                
            }}>R</button>
            <button onClick={() => {
                //count--
                setCount(count-1)
                
            }}>-</button>
        </div>
    </div>
  )
}

export default Counter
