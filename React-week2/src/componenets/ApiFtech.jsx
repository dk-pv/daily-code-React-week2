// import React, { Component } from "react";

// export class ApiFtech extends Component {
//   constructor() {
//     super();
//     this.state = {
//       Data: [],
//     };
//   }

//   async componentDidMount() {
//     try {
//       const Api = "https://jsonplaceholder.typicode.com/posts";
//       const Response = await (await fetch(Api)).json();
//       this.setState({
//         Data: Response,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   render() {
//     return (
//       <div>
//         {this.state.Data.map((list) => {
//           return (
//             <div>
//               <h1>{list.title}</h1>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default ApiFtech;






