import {cardProduct, imgCard, buttonDetail} from './item.module.css'

export default function Item({title, description, price, pictureUrl}) {
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
        <footer >
            <button className={buttonDetail}>Ver detalle</button>
        </footer>
    </article>
  )
}
