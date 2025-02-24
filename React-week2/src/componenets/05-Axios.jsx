// import React, { useState } from 'react'
import axios from 'axios'

// const Axios = () => {

//     const getUsers = async () => {
//         const Respoanse = await axios.get("https://jsonplaceholder.typicode.com/users")
//         const data = Respoanse.data 
//         setData(Respoanse.data)
//     }
//     const [data , setData] =  useState([])
//   return (
//     <div>
//       <h1>i'm  a  user</h1>

//       <div>
//         <button onClick={getUsers}>get users</button>
//         {data.map((user) =>{
//             return <div key={user.id}>{user.name}</div>
//         })}
//       </div>
//     </div>
//   )
// }

// export default Axios;






import React, { useState } from 'react'


const Axios = () => {
    const getUserData = async () =>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setData(response.data)

    }
    const [data , setData] = useState([])
  return (
    <div>
      <button onClick={getUserData}>users data</button>
      {
        data.map((item) =>{
            return <div key={item.id}>{item.name}</div>
        })
      }
    </div>
  )
}

export default Axios
