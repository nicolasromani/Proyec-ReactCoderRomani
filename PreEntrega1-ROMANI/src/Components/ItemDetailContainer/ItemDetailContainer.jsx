import { useState, useEffect } from "react"
// import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import {bloqCardDetail} from './itemDetailContainer.module.css'
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from '../../firebase/client'


export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'products', itemId)

    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data }
        setProduct(productAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })     
    // getProductById(itemId)
    //   .then(response => {
    //     setProduct(response);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   })
  },[itemId])

    return (
      <div className={bloqCardDetail}>
          <ItemDetail {...product} />
      </div>
  )
}
