import Logo from "../../images/logo.jpg";
import CartWidgetComponent from "../CartWidget/index.js";

const NavBarComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-white">
                <img src={Logo} alt="logo cucalambe" className="logo" />
                <a className="navbar-brand" href="#">Cabañas Cucalambé</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a className="nav-item nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Cabañas</a>
                        <a className="nav-item nav-link" href="#">Servicios</a>
                        <a className="nav-item nav-link" href="#">Nosotros</a>
                        <a className="nav-item nav-link" href="#">Contacto</a>
                    </div>
                    <CartWidgetComponent />
                </div>
            </nav>
        </>
    );
}

export default NavBarComponent;