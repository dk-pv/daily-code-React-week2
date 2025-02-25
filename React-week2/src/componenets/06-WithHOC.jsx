import React,{useState} from "react";

const WithHOC = (WrappedCompoent) => {
  return () => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
      setIsHover(true);
    };
    const handleMouseLeave = () => {
      setIsHover(false);
    };

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={isHover ? { backgroundColor: 'red' } : {}}
      >
        <WrappedCompoent />
      </div>
    );
  };
};

export default WithHOC;
