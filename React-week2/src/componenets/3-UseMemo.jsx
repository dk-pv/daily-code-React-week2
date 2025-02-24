// import React, { useMemo, useState } from "react";

// const UseMemo = () => {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   const incrementCount1 = () => {
//     setCount1(count1 + 1);
//   };
//   const incrementCount2 = () => {
//     setCount2(count2 + 1);
//   };

//   const isEven = useMemo(() => {
//     let i = 0;
//     while (i < 2000000000) {
//       i++;
//     }
//     if (count1 % 2 == 0) {
//       return "even";
//     } else {
//       return "odd";
//     }
//   }, [count1]);

//   return (
//     <div>
//       <button
//         style={{ backgroundColor: "black", color: "red" }}
//         onClick={incrementCount1}
//       >
//         counter 1 : {count1}
//       </button>

//       <span>{isEven}</span>

//       <button style={{ backgroundColor: "red" }} onClick={incrementCount2}>
//         counter 2 : {count2}
//       </button>
//     </div>
//   );
// };

// export default UseMemo;

/////////////////////////////////////////////////////////////////////////


import React,{useMemo, useState} from "react";
const UseMemo = () => {
  const [count, setCount] = useState(0);

  const multiplyValue = useMemo(() =>{
    return count * 2 ;
  },[count])

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleIncrement}>increment</button>
      <div>the count is {count}</div>
      <div>multiply value {multiplyValue}</div>
    </div>
  );
};

export default UseMemo;
