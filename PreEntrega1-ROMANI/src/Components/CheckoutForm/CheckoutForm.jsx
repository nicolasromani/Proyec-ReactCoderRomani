import { useState } from "react"
import { formStyles, labelStyles, inputStyles, buttonForm } from './checkoutForm.module.css'

export default function CheckoutForm({ onConfirm }) {
    const [nombre, setNombre] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState ('')

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            nombre, phone, email
        }

        onConfirm(userData)
    }

  return (
    <div>
        <form onSubmit={handleConfirm} className={formStyles}>
            <label className={labelStyles}>
                Nombre
                <input className={inputStyles}
                type="text"
                value={nombre}
                onChange={({ target }) => setNombre(target.value)}
                />
            </label>
            <label className={labelStyles}>
                Telefono
                <input className={inputStyles}
                type="text"
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
                />
            </label>
            <label className={labelStyles}>
                Email
                <input className={inputStyles}
                type="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                />
            </label>
            <div>
                <button className={buttonForm} type="submit">Crear Orden</button>
            </div>
        </form>
    </div>
  )
}
