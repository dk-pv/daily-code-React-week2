import React, { useState } from 'react'
import {MemoizedChild} from './Child'

const Parent = () => {
    const [count , setCount] = useState(0)
    const [name , setName] = useState("Danish")
    const change = () =>{
        setCount(count+1)
    }
    const changeName = () =>{
        setName("kukku")
    }
    console.log("parent renderd")
  return (
    <div>
      {count}
      <button onClick={change}>increment</button>
      <button onClick={changeName}>change name</button>
      <MemoizedChild change={name}/>
    </div>
  )
}

export default Parent
