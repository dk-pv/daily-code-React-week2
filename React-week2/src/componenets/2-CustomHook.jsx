// import { useFetch } from "./2-CustomHook2";


// const CustomHook = () => {
//     const {data} = useFetch("https://jsonplaceholder.typicode.com/todos")
//   return (
//     <div>
//       {data &&
//         data.map((todo) => {
//           return <h1 key={todo.id}>{todo.title}</h1>;
//         })}
//     </div>
//   );
// };

// export default CustomHook;

/////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import useInput from './2-CustomHook2'

// const CustomHook = () => {

//     const [firstName , bindFirstName , resetFirstName] = useInput("")
//     const [lastName , bindLastName , resetLastName] = useInput("")

//     const handleSubmit = () =>{
//         alert("hello " + firstName + " " + lastName)
//         resetFirstName()
//         resetLastName()
//     }
//   return (
//     <div>
//       <label >first name : </label>
//       <input type="text" {...bindFirstName} />
//       <br />
//       <label>last name : </label>
//       <input type="text" {...bindLastName} />
//       <br />
//       <button onClick={handleSubmit}>submit</button>
//     </div>
//   )
// }

// export default CustomHook

///////////////////////////////////////////////////////////////////////

// import React from 'react'
// import useCounter from './2-CustomHook2'

// const CustomHook = () => {
//     const [count,increment] = useCounter()
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={increment}>+1</button>
//     </div>
//   )
// }

// export default CustomHook

                //conter change state in 1 secondns

import React from 'react'
import useCounter from './2-CustomHook2'
import { useEffect } from 'react'

const CustomHook = () => {
  const [count , increment] = useCounter()
  useEffect(() => {
    const handle = setInterval(() => increment(),1000)
    return () =>{
      clearInterval(handle)
    }
  })
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}
export default CustomHook
