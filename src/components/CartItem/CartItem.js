import React from "react";

const CartItem = (props) => {
  const item = props.productoYCantidad;
  const precioCombo =
    item.cantidad !== 1 ? (
      <div className="textCart">
        Precio por las {item.cantidad} unidades : $
        {item.cantidad * item.producto.precio}
      </div>
    ) : (
      <div></div>
    );

  return (
    <>
      <div className="cartItem">
        <img className="imgCart" alt="foto" src={item.producto.img} />
        <div className="textContainerCart">
          <h2 className="textCart">{item.producto.name}</h2>
          <div className="textCart">{item.producto.descripcion}</div>
          <h5 className="textCart">Cantidad: {item.cantidad}</h5>
          <div className="textCart">
            Precio por unidad: ${item.producto.precio}
          </div>
          {precioCombo}
        </div>
      </div>
    </>
  );
};

export default CartItem;
