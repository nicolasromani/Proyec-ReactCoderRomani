import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import {bloqCardDetail} from './itemDetailContainer.module.css'
import { useParams } from "react-router-dom"



export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null)

  const { itemId } = useParams()

  useEffect(()=> {
    getProductById(itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      })
  },[itemId])

    return (
    <div className={bloqCardDetail}>
        <ItemDetail {...product} />
    </div>
  )
}
