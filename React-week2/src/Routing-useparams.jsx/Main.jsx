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


import React from 'react'
import Home from './Home'
import Book from './Book'

import {createBrowserRouter , RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
    {path : '/' , element : <Home/>},
    {path : '/book/:id' , element : <Book/>}
])

const Main = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Main
