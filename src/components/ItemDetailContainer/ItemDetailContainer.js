import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";
import productList from "../../mocks/productList.js"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    const { productoId } = useParams();

    useEffect(()=> {

        productList.forEach(product => {
            if (product.id.toString() === productoId) {
                setProducto(product)
            }
        })

        return {

        }

    },[productoId])

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
        alert("Agregada/s " + contador + " unidad/es al carrito!")
        setContador(1)
    }

    return(
        <>
            <ItemDetail producto={producto} contador= {contador} onAdd= {onAdd} onSupr= {onSupr} agregadoCarrito= {agregadoCarrito}/>
        </>
    )
}

export default ItemDetailContainer;