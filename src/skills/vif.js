import React, { useState } from "react"

export default function Vif (){
  const [ isShow, setIsShow ] = useState(true)
  const onToggleShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div className="v-if">
      <button onClick={ onToggleShow }>切换</button>
      {/* 也可以用三目运算符 */}
      {/* { isShow ? <div>前端胖头鱼 显示出来啦</div> : null } */}
      {
        isShow && <div>前端胖头鱼 显示出来啦</div>
      }
    </div>
  )
}
