import ItemCount from "../ItemCount/ItemCount"
import {cardDetail, prodDescrip, footCard, cardButton} from "./itemDetail.module.css"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"

export default function ItemDetail({id,title,description,pictureUrl,price,stock}) {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const hanleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, title, price
        }

        addItem(item, quantity)
    }

    return (
        <div className={cardDetail}>
            <img src={pictureUrl} alt={title} />
            <article>
                <header>
                    <h2>
                        {title}
                    </h2>
                </header>
            </article>
            <section>
                <p className={prodDescrip}>
                    Descripcion: {description} 
                </p>
                <p className={prodDescrip}>
                    Precio: ${price}
                </p>
            </section>
            <footer className={footCard}>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className={cardButton}>Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={hanleOnAdd}/>
                    )
                }
            </footer>
        </div>
    )
}
