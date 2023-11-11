import ItemCount from '../ItemCount/ItemCount'
import { saludo } from './itemListContainer.module.css' 

export default function ItemListContainer({greeting}) {
  return (
    <div>
        <span className = {saludo} > {greeting} </span> 
    <ItemCount stock = {10} onAdd = {(count) => console.log('Cantidad agregada ',count)}/>
    </div>
  )
}
