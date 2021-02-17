const Item = ({producto}) => {
    return(
        <>
            <div  className="cardEnContainer">
                <h3 className="textoCard">{producto.name}</h3>            
                <p className="textoCard">Habitaciones: {producto.habitaciones}</p>
                <p className="textoCard">Baños: {producto.baños}</p>
            </div>
        </>
    )
}

export default Item