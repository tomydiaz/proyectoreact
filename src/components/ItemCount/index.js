const ItemCount = (props) => {
    return(
        <>
            <b className="stockText">Stock: {props.stock}</b>

            <button onClick={() => { props.onSupr() }} className="button"> - </button>

            <b id="cont">{props.contador}</b>

            <button onClick={() => { props.onAdd(props.stock) }} className="button"> + </button>
            
            <button className="button"> Comprar </button>
        </>
    )
}

export default ItemCount