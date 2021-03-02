import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
  const [cantidadCarrito, setCantidadCarrito] = useState(1);

  const agregarCarrito = (parametro) => {
    setCantidadCarrito(parametro);
  };

  const onAdd = () => {
    alert(
      `Agregaste al carrito: ${cantidadCarrito} unidades de ${props.producto.name}`
    );
  };

  return (
    <>
      <div className="card">
        <img alt="Foto Detail" className="imgDetail" src={props.producto.img} />
        <h3 className="textoCard">{props.producto.name}</h3>
        <p className="textoCard">
          <b>Baños: </b>
          {props.producto.baños}
        </p>
        <p className="textoCard">
          <b>Descripcion: </b>
          {props.producto.descripcion}
        </p>
        <ItemCount
          stock={props.producto.stock}
          onAdd={onAdd}
          agregarCarrito={agregarCarrito}
          contador={props.contador}
          sumar={props.sumar}
          restar={props.restar}
        />
      </div>
    </>
  );
};

export default ItemDetail;
