import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, query, writeBatch, documentId, getDocs, where, Timestamp } from "firebase/firestore"
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { db } from '../../firebase/client'
import { checkoutMenu, order } from './checkout.module.css'


export default function Checkout() {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ nombre, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    nombre, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []
            
            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs (query(productsRef, where(documentId(), 'in',ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                
                const productAddedToCart = cart.find(prod => prod.id == doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length == 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos que estan fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        
    }

    if (loading) {
        return <h1 className={order}>Se esta generando su orden...</h1>
    }

    if (orderId) {
        return <h1 className={order}>El ID de su orden es: {orderId}</h1>
    }

  return (
    <div className={checkoutMenu}>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm={createOrder} />
    </div>
  )
}
