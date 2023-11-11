import { useState } from "react"
import {countButton,blockCart,cartButton} from './itemCount.module.css'

export default function ItemCount({stock, onAdd}) {
  const [count, setCount] = useState(1)

  return (
    <div className={blockCart}>
      <div className = {countButton}>
        <button onClick = {() => setCount (count + 1)} disabled = {count==stock}> + </button>
        <h4>{count}</h4>
        <button onClick = {() => setCount (count - 1)} disabled = {count==1}> - </button>
      </div>
      <div className = {cartButton}>
        <button onClick = {() => onAdd(count)} disabled = {!stock}> Add to cart </button>
      </div>
    </div>
  )
}
