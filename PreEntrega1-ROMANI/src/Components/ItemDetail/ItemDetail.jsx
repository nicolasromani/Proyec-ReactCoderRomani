import ItemCount from "../ItemCount/ItemCount"
import {cardDetail, prodDescrip, footCard} from "./itemDetail.module.css"

export default function ItemDetail({title,description,pictureUrl,price}) {
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
            <p>
                Precio: ${price}
            </p>
        </section>
        <footer className={footCard}>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}/>
        </footer>
    </div>
  )
}
