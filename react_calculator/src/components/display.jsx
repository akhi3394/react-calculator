import React from 'react'

const Display = (props) => {
    console.log(props);
  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  )
}

export default Display
