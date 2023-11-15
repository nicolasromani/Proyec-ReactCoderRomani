import ItemCount from "../ItemCount/ItemCount"

export default function ItemDetail({id, title,description,pictureUrl,price}) {
  return (
    <div>
        <article>
            <header>
                <h2>
                    {title}
                </h2>
            </header>
        </article>
        <img src={pictureUrl} alt={title} />
        <section>
            <p>
                Descripcion: {description} 
            </p>
            <p>
                Precio: ${price}
            </p>
        </section>
        <footer>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}/>
        </footer>
    </div>
  )
}
