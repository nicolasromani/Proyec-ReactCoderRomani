import spartan from '../Assets/logoSpartan.png'
import banner from '../Assets/banner.png'
import IconCart from '../CartWidget/CartWidget'
import { logoSpartan, navbar, menuList, LogBanner} from './navbar.module.css'
import { NavLink, Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <div className={LogBanner}>
        <img src={banner} alt="Banner-logo"/>
    </div>
    <nav className={navbar}>
        <Link to='/'>
          <img src={spartan} alt="Spartan-Logo" className={logoSpartan}/>  
        </Link>
        <ul className={menuList}> 
            <li>
                <NavLink to={'/'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/category/remeras'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
            </li>
            <li>
                <NavLink to={'category/uniformes'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Uniformes</NavLink>
            </li>
            <li>
                <NavLink to={'category/equipo'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Equipo</NavLink>
            </li>
            <li>
                <NavLink to={'category/gorrasyparches'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Gorras y Parches</NavLink>
            </li>
        </ul>
        <IconCart />
    </nav>
    </>
    
  )
}
