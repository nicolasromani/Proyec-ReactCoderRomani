import { useState } from "react"

export default function ItemCount({stock, onAdd}) {
  const [count, setCount] = useState(0)

  const increment = () => {
    if (count < stock) {
      setCount (count + 1);
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount (count - 1);
    }
  }

  return (
    <div>
      <div>
        <button onClick={increment} disabled = {count==10}> + </button>
        <span>{count}</span>
        <button onClick={decrement} disabled = {count==0}> - </button>
      </div>
      <div>
        <button>Agregar al carrito</button>
      </div>
    </div>
  )
}
