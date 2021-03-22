import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productList from "../../mocks/productList.js";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  const { productoId } = useParams();

  const [contador, setContador] = useState(0);

  const sumar = (stock) => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  useEffect(() => {
    productList.forEach((product) => {
      if (product.id.toString() === productoId) {
        setProducto(product);
      }
    });

    return {};
  }, [productoId, contador]);

  return (
    <>
      <ItemDetail
        productoId={parseInt(productoId)}
        producto={producto}
        contador={contador}
        sumar={sumar}
        restar={restar}
      />
    </>
  );
};

export default ItemDetailContainer;
