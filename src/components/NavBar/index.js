import Logo from "../../images/logo.jpg";
import CartWidgetComponent from "../CartWidget/index.js";
import { Link } from 'react-router-dom';

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
                    <div class="navbar-nav">
                        <div className="nav-item nav-link"><Link to={`/`}>Inicio</Link></div>
                        <div className="nav-item nav-link"><Link to={`/cabañas`}>Cabañas</Link></div>
                        <div className="nav-item nav-link"><Link to={`/detail`}>Detail</Link></div>
                        <div className="nav-item nav-link">Servicios</div>
                        <div className="nav-item nav-link">Nosotros</div>
                        <div className="nav-item nav-link">Contacto</div>
                    </div>
                    <CartWidgetComponent />
                </div>
            </nav>
        </>
    );
}

export default NavBarComponent;