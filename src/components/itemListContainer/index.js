import { useEffect, useState } from "react";
import ItemCount from "../ItemCount";
import productList from "../../mocks/productList.js";
import ItemList from "../ItemList";

const ItemListContainer = () => {

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

    const [productos, setProductos] = useState([])

    useEffect(()=> {
        const miPromesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productList)
            }, 2000);
        });

        miPromesa.then(
            (result)=>{
                setProductos(result)
            }
        )
    })


    return (
        <>
            <h2>Este es el item list container</h2>
            <ItemCount stock="12" cont={contador} onSupr={onSupr} onAdd={onAdd}/>
            <ItemList productos={productos}/>
        </>  
    )
};

export default ItemListContainer;