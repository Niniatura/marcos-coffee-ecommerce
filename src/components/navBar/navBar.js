import logo from '../images/brand_logo.jpeg';
import { Cart } from '../cartWidget/CartWidget.js';
import './navBar.css';
export const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                    <div>
                        <img src={logo} className="brand-logo" alt="logo" />
                        <p className="navbar-brand coffeeing">Coffeeing</p>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 categorias">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Como comprar</a>
                            </li>   
                        </ul>
                    <Cart />
                    </div>
            </div>
        </nav>
    )
}