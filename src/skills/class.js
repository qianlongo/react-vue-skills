import React, { useMemo, useState } from "react"

import './class.css'

export default function Class (){
  const [ isActive, setIsActive ] = useState(false)
  const buttonText = useMemo(() => {
    return isActive ? '已选中' : '未选中'
  }, [ isActive ])
  const buttonClass = useMemo(() => {
    return [ 'button', isActive ? 'active' : '' ].join(' ')
  }, [ isActive ])

  const onClickActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={ buttonClass } onClick={onClickActive}>{ buttonText }</div>
  )
}
