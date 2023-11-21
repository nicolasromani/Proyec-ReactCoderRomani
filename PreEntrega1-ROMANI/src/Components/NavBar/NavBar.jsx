import spartan from '../Assets/logoSpartan.png'
import banner from '../Assets/banner.png'
import IconCart from '../CartWidget/CartWidget'
import { logoSpartan, navbar, menuList, LogBanner} from './navbar.module.css'

export default function NavBar() {
  return (
    <>
    <div className={LogBanner}>
        <img src={banner} alt="Banner-logo"/>
    </div>
    <nav className={navbar}>
        <img src={spartan} alt="Spartan-Logo" className={logoSpartan}/>
        <ul className={menuList}> 
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Remeras</a>
            </li>
            <li>
                <a href="#">Uniformes</a>
            </li>
            <li>
                <a href="#">Equipo</a>
            </li>
            <li>
                <a href="#">Gorras y Parches</a>
            </li>
        </ul>
        <IconCart />
    </nav>
    </>
    
  )
}
