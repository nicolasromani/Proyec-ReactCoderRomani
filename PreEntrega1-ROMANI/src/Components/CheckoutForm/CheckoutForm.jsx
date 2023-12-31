import { useState } from "react"
import { formStyles, labelStyles, inputStyles, buttonForm } from './checkoutForm.module.css'

export default function CheckoutForm({ onConfirm }) {
    const [nombre, setNombre] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState ('')
    const [error, setError] = useState(null)

    const handleConfirm = (e) => {
        e.preventDefault();

        // Verificar si hay campos vacíos
        if (!nombre || !phone || !email) {
            setError('Todos los campos son obligatorios');
            return;
        }

        const userData = {
            nombre, phone, email
        };

        // Limpia el error antes de enviar los datos
        setError(null);

        onConfirm(userData);
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
