// import React, { useContext } from "react";
// import { MyContext } from "./UseContext";

// const Components2 = () => {
//   const { count, setCount } = useContext(MyContext);

//   const increment = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <button onClick={increment}>click : {count}</button>
//     </div>
//   );
// };

// export default Components2;

////////////////////////////////////////////////////////////////////////

import React from 'react'
import Components3 from './Components3'

const Components2 = () => {
  return (
    <div>
      <h1>COMPONENT 2</h1>
      <Components3 />
    </div>
  )
}

export default Components2

