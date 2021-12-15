import React, { useState } from "react"

export default function VShow (){
  const [ isShow, setIsShow ] = useState(true)
  const onToggleShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div className="v-show">
      <button onClick={ onToggleShow }>切换</button>
      {
        <div style={{ display: isShow ? '' : 'none' }}>前端胖头鱼 显示出来啦</div>
      }
    </div>
  )
}
