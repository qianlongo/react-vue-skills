import React, { useState, useEffect } from "react"

import './dialog.css'

export default function Dialog(props) {
  // 原谅我用visible -1这种傻叉的方式先实现了, 重点不是在这里
  const { title, main, visible = -1 } = props
  const [visibleInner, setVisibleInner] = useState(false)

  const onHide = () => {
    setVisibleInner(false)
  }

  useEffect(() => {
    setVisibleInner(visible > 0)
  }, [ visible ])

  return (
    <div className="dialog" style={ { display: visibleInner ? 'block' : 'none' }}>
      <div className="dialog-mask" onClick={ onHide }></div>
      <div className="dialog-body">
        {/* { title ? <div className="dialog-title">{ title }</div> : null } */}
        {/* 注意这里，直接渲染title就可以了 */}
        { title }
        <div className="dialog-main">
          {/* 注意这里，通过children实现默认插槽功能 */}
          {/* {children} */}
          {/* 这一这里不是children了，是main */}
          { main }
        </div>
        <div className="dialog-footer">
          <div className="button-cancel" onClick={ onHide }>取消</div>
          <div className="button-confirm" onClick={ onHide }>确定</div>
        </div >
      </div >
    </div >
  )
}
