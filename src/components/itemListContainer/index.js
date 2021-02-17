import { useEffect, useState } from "react";
import productList from "../../mocks/productList.js";
import ItemList from "../ItemList";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(()=> {
        const miPromesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productList)
            }, 1000);
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
            <ItemList productos={productos}/>
        </>  
    )
};

export default ItemListContainer;