// import React, { Component } from 'react'

// class DataMaping extends Component {
//   render() {
//     return (
//       <div className='container'>
//         <h1>Name : {this.props.name}</h1>
//         <h1>Age : {this.props.age}</h1>
//         <h1>ID : {this.props.id}</h1>
//       </div>
//     )
//   }
// }

// export default DataMaping



// another way props access ( destructuring)


import React, { Component } from 'react'
class DataMaping extends Component {
  render() {
    const {name , age , id} = this.props
    return (
      <div className='container'>
        <h1>Name : {name}</h1>
        <h1>Age : {age}</h1>
        <h1>ID : {id}</h1>
      </div>
    )
  }
}
export default DataMaping