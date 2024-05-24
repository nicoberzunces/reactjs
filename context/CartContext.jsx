import { Children, createContext, useState } from "react";
import '../style.css'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ([])

    console.log(cart)

    const addItem = (item,quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const CartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(CartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
          { children }
          </CartContext.Provider>
    )
}

export default CartContext