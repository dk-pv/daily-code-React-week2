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