
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import productList from "../../mocks/productList.js"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productList[0])
            }, 2000);
        })
    }

    getItems().then(result => {
        setProducto(result)
    })

    /* ---- */

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

    return(
        <>
            <ItemDetail producto={producto} contador = {contador} onAdd= {onAdd} onSupr= {onSupr}/>
        </>
    )
}

export default ItemDetailContainer;