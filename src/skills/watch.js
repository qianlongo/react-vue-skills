import React, { useState, useMemo, useEffect } from "react"
import './watch.css'

export default function Watch() {
  const [fetching, setFetching] = useState(false)
  const [selects, setSelects] = useState([
    'boy',
    'girl'
  ])
  const [selectValue, setSelectValue] = useState('')

  const result = useMemo(() => {
    return fetching ? '请求中' : `请求结果： 选中${selectValue || '~'}`
  }, [ fetching ])

  const onSelect = (value) => {
    setSelectValue(value)
  }
  const fetch = () => {
    if (!fetching) {
      setFetching(true)

      setTimeout(() => {
        setFetching(false)
      }, 1000)
    }
  }

  useEffect(() => {
    fetch()
  }, [ selectValue ])

  return (
    <div className="watch">
      <div className="selects">
        {
          selects.map((item, i) => {
            return <button key={ i } onClick={ () => onSelect(item) }>{ item }</button>
          })
        }
      </div>
      <div className="result">
        { result }
      </div>
    </div>
  )
}
