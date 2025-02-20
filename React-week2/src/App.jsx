import React from "react";
import Data from "./Data.json";
import './App.css'

class MapData extends React.Component {
  render() {
    return (
      <>
        {Data.map( (items) =>{
          return(
            <div className="container">
              <h1>Name : {items.Name}</h1>
              <h1>Age : {items.Age}</h1>
              <h1>ID : {items.ID}</h1>
            </div>
          )
        })}
      </>
    );
  }
}
export default MapData;
