
import './navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <a className='navbar__link'>Rick and Morty</a>
        <div className='navbar__container-fluid'></div>
            <img className='navbar__logo' src={logo} alt="logo_rick_and_morty" />





      </nav>
    )
  }
  
  export default Navbar