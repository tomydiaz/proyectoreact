import { NavLink } from "react-router-dom"

const ItemCount = (props) => {

    const toggleArray = document.getElementsByClassName('toggle')

    return(
        <>
        <div className="contDetail toggle">
            <b className="stockText">Stock: {props.stock}</b>
            <div className="contCont">
                <button onClick={() => { props.restar() }} className="botonCont"> - </button>

                <b id="cont">{props.contador}</b>

                <button onClick={() => { props.sumar(props.stock) }} className="botonCont"> + </button>
            </div>
            <button onClick={() => {
                props.agregarCarrito(props.contador)
                for (let i = 0; i < toggleArray.length; i++) {
                    toggleArray[i].classList.toggle("oculto")
                }
            }} className="botonCarrito"> Agregar al carrito </button>
        </div>

        <div className="terminarCompra toggle oculto">
            <button onClick={()=> {
                for (let i = 0; i < toggleArray.length; i++) {
                    toggleArray[i].classList.toggle("oculto")
                }
            }}> Volver </button>
            <NavLink to={"/cart"}><button onClick={() => { props.onAdd() }}> Termina tu compra ({props.contador} unidad/es)</button></NavLink>
        </div>
        </>
    )
}

export default ItemCount