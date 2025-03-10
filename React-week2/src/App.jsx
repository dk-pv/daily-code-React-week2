  
  
                            //   Data ACCESS with map FUNCTION


// import Data from "./Data.json";
// import './App.css'
// import DataMaping from "./componenets/DataMaping";
// import React, { Component } from 'react'

// export class App extends Component {
//   render() {
//     return (
//       <div>
//         {Data.map( (items) =>{
//           return (
//             <div className="container">
//               <h1>NAME : {items.Name}</h1>
//               <h1>AGE : {items.Age}</h1>
//               <h1>ID : {items.ID}</h1>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
// }

// export default App




//another way (create a new component )

// class MapData extends React.Component {
//   render() {
//     return (
//       <>
//         {Data.map( (items) =>{
//           return <DataMaping name = {items.Name}  age = {items.Age}  id={items.ID}/>
//         })}
//       </>
//     );
//   }
// }
// export default MapData;
////////////////////////////////////////////////////////////////////////


                  // use context


///////////////////////////////////////////////////////////////////////


import React from 'react'
import UseCallback from './componenets/07-UseCallback'
// import Main from './Routing-useparams.jsx/Main'

// import Parent from './componenets/React.Memo/Parent'

// import HOC from './componenets/06-HOC'
// import HOC2 from './componenets/06-HOC2'

// import { HeadingWithHoverAnim } from './componenets/06-HOC'
// import { ParaWithHoverAnim } from './componenets/06-HOC2'
// import Axios from './componenets/05-Axios'
// import UseMemo from './componenets/3-UseMemo'
// import CustomHook from './componenets/2-CustomHook'
// import UseContext from './UseContextComponents/UseContext'
// import UseReducer from './componenets/1-UseReducer'
// import UseEffect from './componenets/UseEffect'
// import State from './componenets/State'
// import ApiFtech from './componenets/ApiFtech'

const App = () => {
  return (
    <div>
      {/* <ApiFtech/> */}
      {/* <State /> */}
      {/* <UseEffect/> */}
      {/* <UseReducer/> */}
      {/* <UseContext/> */}
      {/* <CustomHook/> */}
      {/* <UseMemo/> */}
      {/* <Axios/> */}
      {/* <HeadingWithHoverAnim />
      <ParaWithHoverAnim /> */}
      {/* <HOC/>
      <HOC2/> */}
      {/* <Parent /> */}
      {/* <Main/> */}
      <UseCallback/>
     
    </div>
  )
}

export default App

