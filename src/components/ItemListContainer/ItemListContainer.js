import { useEffect, useState } from "react";
// import productList from "../../mocks/productList.js";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/index";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { productoId } = useParams();

  const [prod, setProd] = useState([]);

  const db = getFirestore();

  useEffect(() => {
    const itemCollection = db.collection("productos");
    itemCollection.get().then((value) => {
      let aux = value.docs.map((element) => {
        return element.data();
      });
      setProd(aux);
    });

    // -----------

    // let productListFiltrada = productList.filter((producto) => {
    //   if (producto.idCategoria.toString() === productoId) {
    //     return producto;
    //   } else {
    //     return undefined;
    //   }
    // });

    // if (productListFiltrada.length !== 0) {
    //   setProductos(productListFiltrada);
    // } else {
    //   setProductos(productList);
    // }

    // -----------

    let productListFiltradaFirebase = prod.filter((producto) => {
      if (producto.idCategoria.toString() === productoId) {
        return producto;
      } else {
        return undefined;
      }
    });

    if (productListFiltradaFirebase.length !== 0) {
      setProductos(productListFiltradaFirebase);
    } else {
      setProductos(prod);
    }

    return {};
  }, [productoId, db, prod]);

  return (
    <>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
