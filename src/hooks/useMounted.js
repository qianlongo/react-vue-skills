import React from "react"

const useMounted = (callback) => {
  React.useEffect(callback, [])
}

export default function useMountedDemo() {
  const [count, setCount] = React.useState(0);

  useMounted(() => {
    console.log("useMounted");
  });

  return (
    <div>
      count: {count}
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  )
}
