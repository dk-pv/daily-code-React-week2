import React from 'react'

const Child = ({change}) => {
    console.log("child renderd")
  return (
    <div>
      {change}
    </div>
  )
}

export default Child
export const MemoizedChild = React.memo(Child)
