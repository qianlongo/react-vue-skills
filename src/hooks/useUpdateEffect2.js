import React from "react"

const useUpdateEffect = function (effectCallback, deps = [])  {
  const isFirstMount = React.useRef(false)

  React.useEffect(() => {
    return () => {
      isFirstMount.current = false
    }
  }, [])

  React.useEffect(() => {
    if (!isFirstMount.current) {
      isFirstMount.current = true
    } else {
      return effectCallback()
    }
  }, deps)
}

export default function useUpdateEffectDemo() {
  const [count, setCount] = React.useState(0);

  useUpdateEffect(() => {
    console.log('Count changed', count)
  }, [ count ])

  return (
    <div>
      count: {count}
      <button onClick={() => setCount(count + 1)}>change</button>
    </div>
  )
}
