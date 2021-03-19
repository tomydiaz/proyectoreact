import { React, useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { carrito, setCarrito } = useContext(CartContext);

  const clear = () => {
    setCarrito([]);
  };

  return carrito.length == 0 ? (
    <h2 className="oops">Oops, al parecer tu carrito está vacío!</h2>
  ) : (
    <>
      <div className="cart">
        <h1 className="tituloCarrito">Carrito de compras</h1>
        {carrito.map((productoYCantidad, index) => {
          return <CartItem key={index} productoYCantidad={productoYCantidad} />;
        })}
        <button
          onClick={() => {
            clear();
          }}
          className="botonesCart"
        >
          Vaciar Carrito
        </button>
        <button className="botonesCart">Finalizar Compra</button>
      </div>
    </>
  );
};

export default Cart;
