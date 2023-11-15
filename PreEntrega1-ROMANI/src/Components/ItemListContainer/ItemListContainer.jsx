import { saludo,contBlq1 } from './itemListContainer.module.css' 
import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'


export default function ItemListContainer({greeting}) {
  const [products,setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(response => {
        setProducts (response)
      })
      .catch(error => {
        console.error(error)
      })
  },[])

  return (
    <div className={contBlq1}>
        <h1 className = {saludo} > {greeting} </h1>
        <ItemList products={products}/> 
    </div>
  )
}
