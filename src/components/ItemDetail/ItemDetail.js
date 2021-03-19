import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext.jsx";

const ItemDetail = (props) => {
  const { carrito, setCarrito } = useContext(CartContext);

  const onAdd = (cantidad, producto) => {
    if (carrito.length !== 0) {
      carrito.forEach((objeto) => {
        if (objeto.producto.name === producto.name) {
          objeto.cantidad += cantidad;
        } else {
          const productoYCantidad = {
            producto: producto,
            cantidad: cantidad,
          };
          setCarrito([...carrito, productoYCantidad]);
        }
      });
    } else {
      const productoYCantidad = {
        producto: producto,
        cantidad: cantidad,
      };
      setCarrito([...carrito, productoYCantidad]);
    }

    localStorage["carritoStorage"] = JSON.stringify(carrito);
  };

  return (
    <>
      <div className="card">
        <img alt="Foto Detail" className="imgDetail" src={props.producto.img} />
        <h3 className="textoCard">{props.producto.name}</h3>
        <p className="textoCard">
          <b>Precio: $</b>
          {props.producto.precio}
        </p>
        <p className="textoCard">
          <b>Talle: </b>
          {props.producto.talle}
        </p>
        <p className="textoCard">
          <b>Descripcion: </b>
          {props.producto.descripcion}
        </p>
        <ItemCount
          producto={props.producto}
          stock={props.producto.stock}
          onAdd={onAdd}
          contador={props.contador}
          sumar={props.sumar}
          restar={props.restar}
        />
      </div>
    </>
  );
};

export default ItemDetail;
