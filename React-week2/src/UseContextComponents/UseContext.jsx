// import React, { createContext, useState } from 'react'
// import Components2 from './Components2'
// import Components1 from './Components1'
// import Components3 from './Components3'





// export const Myname = createContext()
// export const MyContext = createContext()
// const UseContext = () => {
//     const [count,setCount] = useState(0)
//     const name = "Danish pv"
//   return (
//     <div>
//       <MyContext.Provider value={{count , setCount}}>
//             <Components2/>
//             <Components1/>
//       </MyContext.Provider>

//       <Myname.Provider  value={name}>
//             <Components3 />
//       </Myname.Provider>
      
//     </div>
//   )
// }

// export default UseContext

///////////////////////////////////////////////////////////////////////////

import React from 'react'
import  Components1  from './Components1'

const UseContext = () => {
  return (
    <div>
      <Components1 />
    </div>
  )
}

export default UseContext

