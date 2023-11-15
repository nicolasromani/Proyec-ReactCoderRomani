import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"



export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null)

  useEffect(()=> {
    getProductById('1')
        .them(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
  },[])

    return (
    <div>
        <ItemDetail {...product} />
    </div>
  )
}
