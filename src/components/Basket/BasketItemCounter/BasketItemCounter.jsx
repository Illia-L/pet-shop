import { useState } from "react"

export default function BasketItemCounter ( ) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}