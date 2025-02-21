// import { useState ,useEffect } from "react";

// export const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchTodo = async () => {
//       const response = await fetch(url);
//       const jsonResponse = await response.json();
//       setData(jsonResponse);
//     };

//     fetchTodo();
//   }, [url]);

//   return { data };
// };

/////////////////////////////////////////////////////////////////////////

// import { useState } from "react";

// function useInput(initialValue){
//     const [value , setaValue] = useState(initialValue)
//     const reset = () =>{
//         setaValue(initialValue)
//     }
//     const bind = {
//         value :value ,
//         onChange : e =>{
//             setaValue(e.target.value)
//         }
//     }
//     return [value,bind,reset]
// }
// export default useInput;


/////////////////////////////////////////////////////////////////////////