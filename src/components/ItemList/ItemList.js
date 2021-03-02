import Item from "../Item/Item.js";


const ItemList = ({productos}) => {
    
    return (
        <>
            <div className="cardContainer">
                {productos.map((producto) => {
                    return <Item key={producto.id} producto={producto}/>
                })}
            </div>
        </>
    )
}

export default ItemList