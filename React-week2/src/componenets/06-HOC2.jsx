import React from "react";
import WithHOC from "./06-WithHOC";

const HOC2 = () => {
  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, aliquid
        fugiat praesentium doloremque asperiores cum consequatur dolorum iure
        animi ad distinctio cumque ullam adipisci totam illo. Aliquid quaerat
        numquam provident.
      </p>
    </div>
  );
};

export default HOC2;
export const ParaWithHoverAnim = WithHOC(HOC2)
