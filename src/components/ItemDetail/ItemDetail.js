// import { useContext } from "react";
import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext.jsx";
// import { useState } from "react";
import StockContext from "../../context/StockContext";

const ItemDetail = (props) => {
  const { carrito, setCarrito } = useContext(CartContext);

  const { stocks } = useContext(StockContext);

  let stok = stocks[props.productoId - 1].stock;

  const onAdd = (cantidad, producto) => {
    if (cantidad === 0) {
      alert("No agregaste ninguna unidad!");
    } else {
      if (carrito.length !== 0) {
        carrito.forEach((unidad) => {
          if (producto.id === unidad.producto.id) {
            unidad.cantidad = unidad.cantidad + cantidad;
            stocks[props.productoId - 1].stock =
              stocks[props.productoId - 1].stock - cantidad;
            localStorage["carritoStorage"] = JSON.stringify(carrito);
            localStorage["carritoStorage"] = JSON.stringify(carrito);
          } else {
            let productoMasCantidad = {
              producto: producto,
              cantidad: cantidad,
            };
            stocks[props.productoId - 1].stock =
              stocks[props.productoId - 1].stock - cantidad;
            setCarrito([...carrito, productoMasCantidad]);
            localStorage["carritoStorage"] = JSON.stringify(carrito);
            localStorage["carritoStorage"] = JSON.stringify(carrito);
          }
        });
      } else {
        let productoMasCantidad = { producto: producto, cantidad: cantidad };
        stocks[props.productoId - 1].stock =
          stocks[props.productoId - 1].stock - cantidad;
        setCarrito([...carrito, productoMasCantidad]);
        localStorage["carritoStorage"] = JSON.stringify(carrito);
        localStorage["carritoStorage"] = JSON.stringify(carrito);
      }
      localStorage["stocks"] = JSON.stringify(stocks);
    }
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
          carrito={carrito}
          stock={stok}
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
