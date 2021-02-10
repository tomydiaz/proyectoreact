const ItemCount = (props) => {
    return(
        <>
            <b>Stock: {props.stock}</b>
            <div> </div>
            <button onClick={() => { props.onSupr(props.cont) }} class="button"> - </button>
            <b>{props.cont}</b>
            <button onClick={() => { props.onAdd(props.stock) }} class="button"> + </button>
            
            <button class="button"> Comprar </button>
        </>
    )
}

export default ItemCount