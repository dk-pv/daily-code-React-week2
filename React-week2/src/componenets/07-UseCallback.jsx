// import React, { useCallback, useState } from "react";
// import List from "./07-List";

// const UseCallback = () => {
//   const [number, setNumber] = useState(0);
//   const [dark, setDark] = useState(false);

//   const getItems = useCallback( () => {
//     return [number + 1, number + 2, number + 3]
//   },[number])
//   const theme =  {
//     backgroundColor: dark ? "black" : "white",
//     color: dark ? "white" : "black"
//   };

//   return (
//     <div style={theme}>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       />

//       <button onClick={() => setDark((currentValue) => !currentValue)}>
//         toggle theme
//       </button>

//       <List getItems={getItems} />
//     </div>
//   );
// };

// export default UseCallback;







//////////////////////////////////////////////////

import React, { useState, useCallback } from 'react';

function UseCallback() {
  const [count, setCount] = useState(0);

  // ഈ ഫംഗ്ഷൻ `count` മാറുമ്പോൾ മാത്രം പുനരുപയോഗിക്കും
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
export default UseCallback;