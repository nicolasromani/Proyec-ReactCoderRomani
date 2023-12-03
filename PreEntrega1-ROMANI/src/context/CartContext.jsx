import { createContext, useState, useEffect } from "react"

export const CartContext = createContext ({
    cart: [],
    totalQuantity: 0,
    total: 0,
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    console.log(cart)
    
    useEffect(() => {
        // Calcula el totalQuantity y total cada vez que cambia el carrito
        calculateTotals();
    }, [cart]);

    const calculateTotals = () => {
        let quantity = 0;
        let totalPrice = 0;
    
        cart.forEach((item) => {
          quantity += item.quantity;
          totalPrice += item.price * item.quantity;
        });
    
        setTotalQuantity(quantity);
        setTotal(totalPrice);
    };

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        }   else {
            console.error ('El producto ya fue agregado')
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod =>  prod.id !== itemId)
        setCart(cartUpdated)
    };

    const clearCart = () => {
        setCart([])
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id == itemId)
    };

    return (
        <CartContext.Provider value = {{ cart,totalQuantity,total, addItem, removeItem, clearCart}}>
            { children }
        </CartContext.Provider>
    );

}
