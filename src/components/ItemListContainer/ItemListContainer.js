import { useEffect, useState } from "react";
import productList from "../../mocks/productList.js";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/index";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const [prod, setProd] = useState([]);

  const { productoId } = useParams();

  const db = getFirestore();

  const itemCollection = db.collection("productos");
  itemCollection.get().then((value) => {
    let aux = value.docs.map((element) => {
      return element.data();
    });
    console.log(aux);
    setProd(aux);
  });

  useEffect(() => {
    const db = getFirestore();

    const itemCollection = db.collection("productos");
    itemCollection.get().then((value) => {
      let aux = value.docs.map((element) => {
        return element.data();
      });
      console.log(aux);
      setProd(aux);
    });

    var productListFiltrada = productList.filter((producto) => {
      if (producto.idCategoria.toString() === productoId) {
        return producto;
      } else {
        return undefined;
      }
    });

    if (productListFiltrada.length !== 0) {
      setProductos(productListFiltrada);
    } else {
      setProductos(productList);
    }

    return {};
  }, [productoId]);

  return (
    <>
      <ItemList productos={productos} />
      <ItemList productos={prod} />
    </>
  );
};

export default ItemListContainer;
