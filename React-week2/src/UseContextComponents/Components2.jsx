import React, { useContext } from "react";
import { MyContext } from "./UseContext";

const Components2 = () => {
  const { count, setCount } = useContext(MyContext);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={increment}>click : {count}</button>
    </div>
  );
};

export default Components2;
