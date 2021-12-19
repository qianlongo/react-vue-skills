import React, { useMemo, useState } from "react"

export default function Computed (){
  const [ num1, setNum1 ] = useState(10)
  const [ num2, setNum2 ] = useState(10)

  const num3 = useMemo((a, b) => {
    return num1 + num2
  }, [ num1, num2 ])

  const onAdd = () => {
    setNum1(num1 + 10)
  }

  return (
    <div className="computed">
      <button onClick={ onAdd }>+10</button>
      <div>计算结果：{ num3 }</div>
    </div>
  )
}
