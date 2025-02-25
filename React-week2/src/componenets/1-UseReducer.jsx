// import React, { useReducer } from 'react'

// const reducerFunc = ( state = initialState, action) =>{
//     switch(action) {
//       case "increment":
//         return state = state + 1
//       case "decrement":
//         return state = state - 1
//       case "reset":
//         return state = 0
//       default:
//         return state
//     }
// }
// const initialState = 0
// const   UseReducer = () => {
//   const [state , dispatch] = useReducer(reducerFunc , initialState )
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={() => dispatch("increment")}>+ 1</button>
//       <button onClick={() => dispatch("decrement")}>- 1</button>
//       <button onClick={() => dispatch("reset")}>AC</button>
//     </div>
//   )
// }

// export default UseReducer




// import React, { useReducer } from "react";
// const initialState = "danish";

// const reduserFunction = (state = initialState, action) => {
//   switch (action) {
//     case "change name":
//       return (state = "kukku");
//     default:
//       return state;
//   }
// };

// const UseReducer = () => {
//   const [state, dispatch] = useReducer(reduserFunction, initialState);
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={() => dispatch("change name")}>change</button>
//     </div>
//   );
// };
// export default UseReducer;









// import React, { useReducer } from 'react'

// let initialState = 0 ;
// const reducerFun = (state = initialState , action) =>{

//   switch (action) {
//     case "increment":
//       return state + 1
//     case "decrement":
//       return state - 1
//     case "reset":
//       return state = 0
//     default:
//       state
//   }
// }

// const UseReducer = () => {

//   const [state , dispatch] = useReducer (reducerFun , initialState)

//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={() => dispatch("increment")}> + 1 </button>
//       <button onClick={() =>dispatch("reset")}> Reset </button>
//       <button onClick={() =>dispatch("decrement")}> - 1 </button>      
//     </div>
//   )
// }

// export default UseReducer





