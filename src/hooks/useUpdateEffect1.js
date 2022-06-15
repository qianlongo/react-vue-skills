import React from "react"

export default function useUpdateEffectDemo() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('Count changed', count)
  }, [ count ])

  return (
    <div>
      count: {count}
      <button onClick={() => setCount(count + 1)}>change</button>
    </div>
  )
}
