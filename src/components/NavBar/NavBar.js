import Logo from "../../images/logo.jpg";
import CartWidgetComponent from "../CartWidget/CartWidget.js";
import { Link, NavLink } from 'react-router-dom';

const NavBarComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-white">
                <Link to={`/`}><img src={Logo} alt="logo cucalambe" className="logo" /></Link>
                <div className="navbar-brand">Cabañas Cucalambé</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div><NavLink to={`/`}  className="nav-item nav-link" activeClassName="seleccionado">Inicio</NavLink></div>
                        <div><NavLink to={`/productos`}  className="nav-item nav-link" activeClassName="seleccionado">Productos</NavLink></div>
                        <li className="nav-item dropdown">
                            <div className="nav-link  pointer" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorias</div>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <NavLink to={`/categoria/1`} className="dropdown-item">Remeras</NavLink>
                                    <NavLink to={`/categoria/2`} className="dropdown-item">Buzos</NavLink>
                                    <NavLink to={`/categoria/3`} className="dropdown-item">Pantalones</NavLink>
                                </div>
                        </li>
                    </div>
                    <CartWidgetComponent />
                </div>
            </nav>
        </>
    );
}

export default NavBarComponent;