import { useEffect, useState } from "react";
import productList from "../../mocks/productList.js";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { productoId } = useParams();

  useEffect(() => {
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
    </>
  );
};

export default ItemListContainer;
