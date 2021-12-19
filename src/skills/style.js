import React from "react"

export default function Style (){
  const style = {
    width: '100%',
    height: '500px',
  }
  const style2 = {
    backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
    borderRadius: '10px',
  }

  return (
    <div className="style" style={ { ...style, ...style2 } } ></div>
  )
}
