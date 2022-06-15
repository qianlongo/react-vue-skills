import React from "react"

const useSetState = (initState) => {
  const [ state, setState ] = React.useState(initState)
  const setMergeState = (value) => {
    setState((prevValue) => {
      const newValue = typeof value === 'function' ? value(prevValue) : value

      return newValue ? { ...prevValue, ...newValue } : prevValue
    })
  }  

  return [ state, setMergeState ]
}

export default function useSetStateDemo() {
  const [ person, setPerson ] = useSetState({
    name: 'fatfish',
    age: 100
  })

  const onSetName = () => {
    setPerson({ name: 'medium' })
  }

  const onSetAge = () => {
    setPerson(() => {
      return {
        age: 1000
      }
    })
  }

  return (
    <div>
      <p>name: { person.name }</p>
      <p>age: { person.age }</p>

      <button onClick={onSetName}>change name</button>
      <button onClick={onSetAge}>change age</button>
    </div>
  )
}
