const ItemCount = (props) => {

    

    return(
        <>
        <div className="contDetail">
            <b className="stockText">Stock: {props.stock}</b>
            <div className="contCont">
                <button onClick={() => { props.restar() }} className="botonCont"> - </button>

                <b id="cont">{props.contador}</b>

                <button onClick={() => { props.sumar(props.stock) }} className="botonCont"> + </button>
            </div>
            <button onClick={() => { props.agregarCarrito(props.contador)}} className="botonCarrito"> Agregar al carrito </button>
        </div>

        <div className="terminarCompra">
            <button onClick={() => { props.onAdd() }}> Termina tu compra ({props.contador} unidad/es) </button>
        </div>
        
        </>
    )
}

export default ItemCount