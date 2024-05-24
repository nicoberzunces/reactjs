import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, setCart } = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);
  
    // Función para calcular el precio total
    const calculateTotalPrice = () => {
      let total = 0;
      cart.forEach(item => {
        total += item.price * item.quantity;
      });
      setTotalPrice(total);
    };
  
    // Calcular el precio total al cargar el componente o cuando cambia el carrito
    useEffect(() => {
      calculateTotalPrice();
    }, [cart]);

  
    if (cart.length === 0) {
      return (
        <div className="cart-empty">
          <h1>No hay items en el carrito</h1>
          <Link to='/' className="Option">Productos</Link>
        </div>
      );
    }
  
    return (
      <div className="cart-container">
        {cart.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
        <h3 className="total-price">Total: ${totalPrice}</h3>
        <button onClick={clearCart} className="Button clear-cart">Limpiar carrito</button>
        <Link to='/checkout' className="Option checkout-link">Checkout</Link>
      </div>
    );
};
  
    
export default Cart


