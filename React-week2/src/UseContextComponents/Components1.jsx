import React, { useContext } from "react";
import { MyContext } from "./UseContext";

const Components1 = () => {
  const { count, setCount} = useContext(MyContext);

  const increment = () => {
    setCount(count + 5);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+5</button>
    </div>
  );
};

export default Components1;
