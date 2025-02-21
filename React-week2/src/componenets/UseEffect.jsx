import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    useEffect(() =>{
        console.log("side effect loaded")
    })

    const [count1 , setCount1 ] = useState(0)
    const [count2 , setCount2 ] = useState(0)

    const add1 = () =>{
        setCount1(count1+1)
    }
    const add2 = () =>{
        setCount2(count2+2)
    }
  return (
    <div>
        <h1>{count1}</h1>
        <h1>{count2}</h1>
        <button onClick={add1}>Add 1</button>
        <button onClick={add2}>Add 2</button>


    </div>
  )
}

export default UseEffect
