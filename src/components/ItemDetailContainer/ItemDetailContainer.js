
import { useState } from "react";
import ItemDetail from "../ItemDetail";
import productList from "../../mocks/productList.js"

const ItemDetailContainer = () => {

    // const [producto, setProducto] = useState({})

    const [contador, setContador] = useState(1)

    const onAdd = (stock) => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    }

    const onSupr = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const agregadoCarrito = () => {
        alert("Agregado al carrito!")
    }

    return(
        <>
            <ItemDetail producto={productList[1]} contador= {contador} onAdd= {onAdd} onSupr= {onSupr} agregadoCarrito= {agregadoCarrito}/>
        </>
    )
}

export default ItemDetailContainer;