// import React, { useContext } from "react";
// import { MyContext } from "./UseContext";

// const Components1 = () => {
//   const { count, setCount} = useContext(MyContext);

//   const increment = () => {
//     setCount(count + 5);
//   };
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>+5</button>
//     </div>
//   );
// };

// export default Components1;

//////////////////////////////////////////////////////////////////////

// import React, { createContext } from "react";
// import Components2 from "./Components2";

// export const UserContext = createContext()

// const Components1 = () => {
//   const user = "danish"

//   return (
//     <div>
//       <h1>COMPONENT 1 {`hello ${user}`}</h1>
//       <UserContext.Provider value={user}>
//         <Components2 />
//       </UserContext.Provider>
//     </div>
//   );
// };

// export default Components1;


////////////////////////////////////////////////////////////

// import React, { createContext } from 'react'
// import Components2 from './Components2'
// export  const UserName = createContext()


// const Components1 = () => {
//   let name = "Dani"
//   return (
//     <div>
//       <h1>component1 {`hai ${name}`}</h1>
//       <UserName.Provider value={name}>
//           <Components2 />
//       </UserName.Provider>
//     </div>
//   )
// }

// export default Components1

