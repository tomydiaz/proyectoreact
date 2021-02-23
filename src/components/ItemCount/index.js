const ItemCount = (props) => {
    return(
        <>
        <div className="contDetail">
            <b className="stockText">Stock: {props.stock}</b>

            <button onClick={() => { props.onSupr() }} className="botonCont"> - </button>

            <b id="cont">{props.contador}</b>

            <button onClick={() => { props.onAdd(props.stock) }} className="botonCont"> + </button>
            
            <button onClick={() => { props.agregadoCarrito()}} className="botonCarrito"> Agregar al carrito ({props.contador} unidades) </button>
        </div>
        </>
    )
}

export default ItemCount