const Item = ({producto}) => {
    return(
        <>
            <div  className="card">
                <h3 className="textoCard">{producto.name}</h3>            
                <p className="textoCard">Habitaciones: {producto.habitaciones}</p>
                <p className="textoCard">Baños: {producto.baños}</p>
                <p className="textoCard">Metros cuadrados: {producto.mtsCuadrados}</p>
            </div>
        </>
    )
}

export default Item