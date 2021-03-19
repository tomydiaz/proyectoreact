import { React, useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { carrito } = useContext(CartContext);

  return (
    <>
      <div className="cardContainer">
        {carrito.map((productoYCantidad) => {
          return (
            <CartItem
              key={productoYCantidad.producto.id}
              productoYCantidad={productoYCantidad}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cart;
