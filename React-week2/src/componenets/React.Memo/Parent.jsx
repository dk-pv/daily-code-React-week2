import React, { useState } from 'react'
import Child from './Child'

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
      <button onClick={change}>increment {count}</button>
      <button onClick={changeName}>{name}</button>
      <Child change={name}/>
    </div>
  )
}

export default Parent
