// import React from 'react'
// import {Link,createBrowserRouter,RouterProvider} from 'react-router-dom'
// import Home from './Home'
// import  Book from './Book'

// const router = createBrowserRouter([
//     {path : '/' , element :<Home/>},
//     {path : '/book/:id', element : <Book/>}
// ])

// const Main = () => {
//   return (
//     <div>
//         <RouterProvider router={router}/>
      
//     </div>
//   )
// }

// export default Main






//////////////////////////////////////////////////////////////////////////


// import React from 'react'
// import Home from './Home'
// import Book from './Book'

// import {createBrowserRouter , RouterProvider} from 'react-router-dom'

// const router = createBrowserRouter([
//     {path : '/' , element : <Home/>},
//     {path : '/book/:id' , element : <Book/>}
// ])

// const Main = () => {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   )
// }

// export default Main





import React, { useReducer } from 'react'

const Main = () => {
  let initialState = 0

  const reducerFun = (state = initialState, action) =>{
      switch (action) {
        case "increment":
          return state + 1;
        default:
          return state;
      }
  }

  const [state , dispatch] = useReducer(reducerFun , initialState)
  return (
    <div>
      <button onClick={() => dispatch("increment")}>increment  : {state}</button>
    </div>
  )
}

export default Main
