import logo from '../img/logo.png'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { RiHome2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar fixed-top nav-container'>
                <div className="nav-cont-start">
                    <img className='brand-img' src={logo} alt="brand logo" />
                    <h3 className='brand-text'>MAIRAZON</h3>
                </div>
                <div className="nav-cont-end">
                    <Link to='/'>
                        <RiHome2Line className='home-icon'/>
                    </Link>
                    <Link to='cart'>
                        <HiOutlineShoppingCart className='shop-cart'/>
                   </Link>
                </div>
        </nav>
    )
}

export default Navbar
