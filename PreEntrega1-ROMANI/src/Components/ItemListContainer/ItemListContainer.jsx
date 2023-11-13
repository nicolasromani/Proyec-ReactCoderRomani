import { saludo } from './itemListContainer.module.css' 

export default function ItemListContainer({greeting}) {
  return (
    <div>
        <span className = {saludo} > {greeting} </span> 
    </div>
  )
}
