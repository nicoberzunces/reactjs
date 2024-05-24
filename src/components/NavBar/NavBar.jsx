import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
//import './NavBar.css'
import '../../../style.css'
import CartContext from "../../../context/CartContext"
import { useContext } from "react"

const NavBar = () => {
       
    const { totalQuantity } = useContext(CartContext)

    return (
        <nav className="NavBar">
             <Link to='/'>
             <h3>Boca Shop</h3>
             </Link>
            <div className="Categories">
            <NavLink to={`/category/pantalones`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Pantalones</NavLink>
            <NavLink to={`/category/camperas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Camperas</NavLink>
            <NavLink to={`/category/buzos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Buzos</NavLink>
            </div>
            <CartWidget />
             {totalQuantity > 0 && <span className="CartCount">{totalQuantity}</span>}
        </nav>
    )
}

export default NavBar