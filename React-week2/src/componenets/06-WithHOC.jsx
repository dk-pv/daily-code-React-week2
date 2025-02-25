// import React,{useState} from "react";

// const WithHOC = (WrappedCompoent) => {
//   return () => {
//     const [isHover, setIsHover] = useState(false);

//     const handleMouseEnter = () => {
//       setIsHover(true);
//     };
//     const handleMouseLeave = () => {
//       setIsHover(false);
//     };

//     return (
//       <div
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         style={isHover ? { backgroundColor: 'red' } : {}}
//       >
//         <WrappedCompoent />
//       </div>
//     );
//   };
// };

// export default WithHOC;


/////////////////////////////////////////////////////////////////////////////


import React,{useState} from 'react'

const WithHOC = (OriginalComponent) => {
  function NewComponent() {
    const [count , setCount] = useState(0)
    
      const increment = () =>{
        setCount(count + 1)
      }
    return <OriginalComponent count ={count} increment={increment}/>
  }
  return NewComponent
}

export default WithHOC

