// import React, { useContext } from 'react'
// import { Myname } from './UseContext'

// const Components3 = () => {
//     const name = useContext(Myname)
//   return (
//     <div>
//       <h1>{name}</h1>
//     </div>
//   )
// }

// export default Components3

/////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import { useContext } from 'react'
// import { UserContext } from './Components1'

// const Components3 = () => {
//   const user = useContext(UserContext)
//   return (
//     <div>
//       <h1>COMPONENT 3 {`bye ${user}`}</h1>
  
//     </div>
//   )
// }

// export default Components3




import React from 'react'
import { UserName } from './Components1'
import { useContext } from 'react'

const Components3 = () => {
  const name = useContext(UserName)
  return (
    <div>
      <h1>component3 {`bye ${name}`}</h1>
    </div>
  )
}

export default Components3

