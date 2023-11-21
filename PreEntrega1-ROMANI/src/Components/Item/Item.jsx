import {cardProduct, imgCard, buttonDetail} from './item.module.css'
import { Link } from 'react-router-dom'

export default function Item({id, title, description, price, pictureUrl}) {
  return (
    <article className={cardProduct}>
        <picture>
            <img src={pictureUrl} alt={title} className={imgCard} />
        </picture>
        <header >
            <h2 >
                {title}
            </h2>
        </header>
        <section>
            <p >
                Precio: ${price}
            </p>
            <p>
                Descripcion: {description}
            </p>
        </section>
        <footer>
            <Link to={`/item/${id}`} className={buttonDetail}>Ver Detalle</Link>
        </footer>
    </article>
  )
}
