import spartan from '../Assets/logoSpartan.png'
import IconCart from '../CartWidget/CartWidget'
import { logoSpartan, navbar, menuList, icon } from './navbar.module.css'

export default function NavBar() {
  return (
    <nav className={navbar}>
        <img src={spartan} alt="Spartan-Logo" className={logoSpartan}/>
        <ul className={menuList}> 
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Indumentaria</a>
            </li>
            <li>
                <a href="#">Equipamiento</a>
            </li>
            <li>
                <a href="#">Galeria</a>
            </li>
            <li>
                <a href="#">About Us</a>
            </li>
        </ul>
        <IconCart />
    </nav>
  )
}
