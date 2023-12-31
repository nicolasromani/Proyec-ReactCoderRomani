import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { listItem } from "./cartItem.module.css"
 
export default function CartItem({id,title, price, quantity}) {
    const { removeItem } = useContext(CartContext)

  return (
    <div className={listItem}>
        <p>{title}</p>
        <p>Cantidad: {quantity}</p>
        <p>Precio Unitario: ${price}</p>
        <button onClick={() => removeItem(id)}>X</button>
    </div>
  )
}
