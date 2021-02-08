import Logo from "../../images/logo.jpg";
import CartWidgetComponent from "../CartWidget/index.js";

const NavBarComponent = () => {
    return (
        <>
            <nav class="navbar navbar-expand-md navbar-light bg-white">
                <img src={Logo} alt="logo cucalambe" className="logo" />
                <a class="navbar-brand" href="#">Cabañas Cucalambé</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#">Cabañas</a>
                        <a class="nav-item nav-link" href="#">Servicios</a>
                        <a class="nav-item nav-link" href="#">Nosotros</a>
                        <a class="nav-item nav-link" href="#">Contacto</a>
                    </div>
                    <CartWidgetComponent />
                </div>
            </nav>
        </>
    );
}

export default NavBarComponent;