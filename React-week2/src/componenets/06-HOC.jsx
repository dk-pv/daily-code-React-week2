// import React from "react";
// import WithHOC from "./06-WithHOC";

// const HOC = () => {
//   return (
//     <div>
//       <h1>higher order component</h1>
//       </div>
//   );
// };

// export default HOC;
// export const HeadingWithHoverAnim = WithHOC(HOC)


/////////////////////////////////////////////////////////////////////////


import React from 'react'
import WithHOC from './06-WithHOC'

const HOC = ({count,increment}) => {
 

  return (
    <div>
      <button onClick={increment}>counter {count}</button>
      
    </div>
  )
}

export default WithHOC(HOC)

