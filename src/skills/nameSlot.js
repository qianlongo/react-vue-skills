import React, { useState } from "react"
import Dialog from './components/dialog'

import './slot.css'

export default function NameSlot() {
  const [visible, setVisible] = useState(-1)

  const onToggleVisible = () => {
    setVisible(Math.random())
  }

  return (
    <div className="slot">
      <button onClick={ onToggleVisible }>切换dialog</button>
      <Dialog
        visible={visible}
        title={ <div className="dialog-title">默认插槽</div> }
        main={ <div className="slot-body">前端胖头鱼</div> }
      >
        {/* 注意这里，会被Dialog组件的children读取并且替换掉 */}
        {/* <div className="slot-body">前端胖头鱼</div> */}
      </Dialog>
    </div>
  )
}
