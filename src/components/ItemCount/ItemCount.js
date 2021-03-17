import { NavLink } from "react-router-dom";

const ItemCount = (props) => {
  const toggleArray = document.getElementsByClassName("toggle");

  return (
    <>
      <div className="contDetail toggle">
        <b className="stockText">Stock: {props.stock}</b>
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
              props.sumar(props.stock);
            }}
            className="botonCont"
          >
            +
          </button>
        </div>
        <button
          onClick={() => {
            props.onAdd(props.contador, props.producto);
            for (let i = 0; i < toggleArray.length; i++) {
              toggleArray[i].classList.toggle("oculto");
            }
          }}
          className="botonCarrito"
        >
          Agregar al carrito
        </button>
      </div>

      <div className="terminarCompra toggle oculto">
        <NavLink to={"/productos"}>
          <button
            onClick={() => {
              for (let i = 0; i < toggleArray.length; i++) {
                toggleArray[i].classList.toggle("oculto");
              }
            }}
          >
            Seguir Comprando
          </button>
        </NavLink>
        <NavLink to={"/cart"}>
          <button>Termina tu compra</button>
        </NavLink>
      </div>
    </>
  );
};

export default ItemCount;
