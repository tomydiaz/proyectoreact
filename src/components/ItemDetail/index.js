import ItemCount from "../ItemCount";

const ItemDetail = (props) => {
    return(
        <>
            <div className="card">
                <img alt="Foto Detail" className="imgDetail" src={props.producto.img}/>
                <h3 className="textoCard">{props.producto.name}</h3>            
                <p className="textoCard"><b>Habitaciones:</b> {props.producto.habitaciones}</p>
                <p className="textoCard"><b>Baños: </b>{props.producto.baños}</p>
                <p className="textoCard"><b>Descripcion: </b>{props.producto.descripcion}</p>
                <ItemCount stock = {12} contador = {props.contador} onAdd = {props.onAdd} onSupr = {props.onSupr} agregadoCarrito= {props.agregadoCarrito}/>
            </div>
            
        </>
    )
}

export default ItemDetail;