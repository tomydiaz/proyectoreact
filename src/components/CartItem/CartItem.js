import React from "react";

const CartItem = (props) => {
  const item = props.productoYCantidad;
  return (
    <>
      <div className="cartItem">
        <p>{item.producto.name}</p>
        <p>{item.cantidad}</p>
      </div>
    </>
  );
};

export default CartItem;
