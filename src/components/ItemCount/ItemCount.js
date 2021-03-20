import { NavLink } from "react-router-dom";

const ItemCount = (props) => {
  const toggleArray = document.getElementsByClassName("toggle");

  const areaContador =
    props.stock === 0 ? (
      <div>
        <b>Nos quedamos sin stock!</b>
      </div>
    ) : (
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
            }}
          >
            Seguir Comprando
          </button>
        </NavLink>
        <NavLink to={"/cart"}>
          <button>Ir al carrito</button>
        </NavLink>
      </div>
    </>
  );
};

export default ItemCount;
