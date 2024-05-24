import cart from './assets/cart.svg'
import '../../../style.css'
import CartContext from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return(
        <Link to='/cart' className='CartWidget'>
    <img className='CartImg' src={cart} alt='cart-widget'></img>
    { totalQuantity }
      </Link>
    )
}
    

export default CartWidget