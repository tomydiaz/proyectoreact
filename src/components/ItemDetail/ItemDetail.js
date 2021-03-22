// import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
// import CartContext from "../../context/CartContext.jsx";
import stocks from "../../mocks/stocks";
// import { useState } from "react";

const ItemDetail = (props) => {
  // const { carrito, setCarrito } = useContext(CartContext);

  let stock = stocks[props.productoId - 1].stock;

  const onAdd = (cantidad, producto) => {
    stock = stock - cantidad;
    console.log(stock);
    stocks[props.productoId - 1].stock = stock;
  };

  const clearCarrito = () => {};

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
          stock={stock}
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
