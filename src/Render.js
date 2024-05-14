import React from 'react'

const Render = (props) => {
  const {width} = props;

  return (
    <>
      <div style={{minWidth: width ,maxWidth:width}}>
        <img src={props.image} style={{ height: "100%", width: "100%", borderRadius: "10px", cursor: "pointer" }} />
      </div>
    </>
  )
}

export default Render
