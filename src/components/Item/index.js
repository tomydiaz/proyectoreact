const Item = ({producto}) => {
    return(
        <>
            <div  className="card">
                <h3>{producto.name}</h3>            
                <p>Habitaciones: {producto.habitaciones}</p>
                <p>Baños: {producto.baños}</p>
                <p>Metros cuadrados: {producto.mtsCuadrados}</p>
            </div>
        </>
    )
}

export default Item