import { useState } from "react";
import ItemCount from "../ItemCount";

const ItemListContainer = () => {

    const [contador, setContador] = useState(1)

    const onAdd = (stock) => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    }

    const onSupr = (cont) => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    return (
        <>
            <h2>Este es el item list container</h2>
            <ItemCount stock="12" cont={contador} onSupr={onSupr} onAdd={onAdd}/>
        </>  
    )
};

export default ItemListContainer;