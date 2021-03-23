import { NavLink } from "react-router-dom";
// import CartContext from "../../context/CartContext.jsx";
import { useState } from "react";

const ItemCount = (props) => {
  const toggleArray = document.getElementsByClassName("toggle");

  // eslint-disable-next-line
  let [stock, setStock] = useState(props.stock);

  const areaContador =
    props.stock === 0 ? (
      <div>
        <b>Nos quedamos sin stock!</b>
      </div>
    ) : (
      <div className="contDetail toggle">
        <b className="stockText">Stock: {stock}</b>
        <div className="contCont">
          <button
            onClick={() => {
              props.restar();
            }}
            className="botonCont"
          >
            -
          </button>

          <b id="cont">{props.contador}</b>

          <button
            onClick={() => {
              props.sumar(stock);
            }}
            className="botonCont"
          >
            +
          </button>
        </div>
        <button
          onClick={() => {
            stock = stock - props.contador;
            props.onAdd(props.contador, props.producto);
            for (let i = 0; i < toggleArray.length; i++) {
              toggleArray[i].classList.toggle("oculto");
            }
            localStorage["carritoStorage"] = JSON.stringify(props.carrito);
            localStorage["carritoStorage"] = JSON.stringify(props.carrito);
          }}
          className="botonCarrito"
        >
          Agregar al carrito
        </button>
      </div>
    );

  return (
    <>
      {areaContador}
      <div className="terminarCompra toggle oculto">
        <NavLink to={"/productos"}>
          <button
            onClick={() => {
              for (let i = 0; i < toggleArray.length; i++) {
                toggleArray[i].classList.toggle("oculto");
              }
              localStorage["carritoStorage"] = JSON.stringify(props.carrito);
              localStorage["carritoStorage"] = JSON.stringify(props.carrito);
            }}
          >
            Seguir Comprando
          </button>
        </NavLink>
        <NavLink to={"/cart"}>
          <button
            onClick={() => {
              localStorage["carritoStorage"] = JSON.stringify(props.carrito);
            }}
          >
            Ir al carrito
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default ItemCount;
