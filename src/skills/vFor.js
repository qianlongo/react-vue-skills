import React, { useState } from "react"

export default function VFor (){
  const [ list, setList ] = useState([
    {
      id: 1,
      name: '前端',
    },
    {
      id: 2,
      name: '后端',
    },
    {
      id: 3,
      name: 'android',
    },
    {
      id: 4,
      name: 'ios',
    },
  ])

  return (
    <div className="v-for">
      {
        list.map((item) => {
          return <div key={ item.id } className="v-for-item">{ item.name }</div>
        })
      }
    </div>
  )
}
