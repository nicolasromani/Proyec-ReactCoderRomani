import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import CartItem from "../CartItem/CartItem"
import { contenedor,centerConteiner,Option} from "./cart.module.css"
import { Link } from 'react-router-dom'

export default function Cart() {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity == 0) {
        return (
            <div className={centerConteiner}>
                <div className={contenedor}>
                    <h2>No hay Items en el carrito</h2>
                    <Link to='/' className={Option}>Productos</Link>
                </div>  
            </div>
        )
    }
  return (
    <div className={centerConteiner}>
        <div className={contenedor}>
            { cart.map(p => <CartItem key= {p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <Link to='/checkout' className={Option}>CheckOut</Link>
        </div>  
    </div>
    
  )
}
