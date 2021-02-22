import { NavLink } from "react-router-dom"

const Item = ({producto}) => {
    return(
        <>
            <div  className="cardEnContainer">
                <NavLink to={`/detail/${producto.id}`}><h3 className="textoCard">{producto.name}</h3></NavLink>         
                <p className="textoCard">Habitaciones: {producto.habitaciones}</p>
                <p className="textoCard">Baños: {producto.baños}</p>
            </div>
        </>
    )
}

export default Item