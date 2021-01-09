import { Link } from 'react-router-dom'
import './style.css'
const Menu = () => {
        return (
            <div>
                 <nav className="navbar navbar-expand-sm navbar-light bg-primary justify-content-center">
                <div className="navbar-nav">
                    <Link className="nav-link mx-3 h3" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link mx-3 h3" to="/about">About</Link>
                    <Link className="nav-link mx-3 h3" to="/services">Services</Link>
                    <Link className="nav-link mx-3 h3" to="/contact">Contact</Link>
                    <Link className="nav-link mx-3 h3" to="/portfolio">Portfolio</Link>
                </div>
</nav>
            </div>
            )
        }
        export default Menu;