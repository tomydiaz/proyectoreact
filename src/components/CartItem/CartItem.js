import React from "react";

const CartItem = (props) => {
  const item = props.productoYCantidad;
  return (
    <>
      <div className="cartItem">
        <img className="imgCart" alt="foto" src={item.producto.img} />
        <div className="textContainerCart">
          <h2 className="textCart">{item.producto.name}</h2>
          <div className="textCart">{item.producto.descripcion}</div>
          <br />
          <h5 className="textCart">Cantidad: {item.cantidad}</h5>
        </div>
      </div>
    </>
  );
};

export default CartItem;
