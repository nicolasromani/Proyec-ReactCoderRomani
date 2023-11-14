import {cardProduct, imgCard} from './item.module.css'

export default function Item({title, description, price, pictureUrl}) {
  return (
    <article className={cardProduct}>
        <header >
            <h2 >
                {title}
            </h2>
        </header>
        <picture>
            <img src={pictureUrl} alt={title} className={imgCard} />
        </picture>
        <section>
            <p >
                Precio: ${price}
            </p>
            <p>
                Descripcion: {description}
            </p>
        </section>
        <footer >
            <button >Ver detalle</button>
        </footer>
    </article>
  )
}
