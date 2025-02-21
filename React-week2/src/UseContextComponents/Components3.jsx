import React, { useContext } from 'react'
import { Myname } from './UseContext'

const Components3 = () => {
    const name = useContext(Myname)
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Components3
