import { saludo,contBlq1 } from './itemListContainer.module.css' 
import { useEffect, useState } from 'react'
import { getProducts, getProductByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


export default function ItemListContainer({greeting}) {
  const [products,setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    
    const asynFunc = categoryId ? getProductByCategory : getProducts

    asynFunc(categoryId)
      .then(response => {
        setProducts (response)
      })
      .catch(error => {
        console.error(error)
      })
  },[categoryId])

  return (
    <div className={contBlq1}>
        <h1 className = {saludo} > {greeting} </h1>
        <ItemList products={products}/> 
    </div>
  )
}
