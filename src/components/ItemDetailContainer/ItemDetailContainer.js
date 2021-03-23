import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
// import productList from "../../mocks/productList.js";
import { getFirestore } from "../../firebase/index";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  const { productoId } = useParams();

  const [contador, setContador] = useState(0);

  const [prod, setProd] = useState([]);

  const db = getFirestore();

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
    const itemCollection = db.collection("productos");
    itemCollection.get().then((value) => {
      let aux = value.docs.map((element) => {
        return element.data();
      });
      setProd(aux);

      prod.forEach((product) => {
        if (product.id.toString() === productoId) {
          setProducto(product);
        }
      });
    });

    //----------
    // prod.forEach((product) => {
    //   if (product.id.toString() === productoId) {
    //     setProducto(product);
    //   }
    // });

    return {};
  }, [productoId, contador, prod, db]);

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
