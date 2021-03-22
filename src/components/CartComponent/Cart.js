import { React, useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";
import StockContext from "../../context/StockContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { carrito, setCarrito } = useContext(CartContext);

  const { stocks } = useContext(StockContext);

  const clearCarrito = () => {
    carrito.forEach((unidad) => {
      stocks.forEach((unit) => {
        if (unidad.producto.id === unit.id) {
          unit.stock = unit.stock + unidad.cantidad;
        }
      });
    });
    setCarrito([]);
    localStorage.clear();
  };

  return carrito.length === 0 ? (
    <>
      <h2 className="oops">Oops, al parecer tu carrito está vacío!</h2>
      <NavLink to={"/productos"}>
        <button className="oops">Ir a comprar</button>
      </NavLink>
    </>
  ) : (
    <>
      <div className="cart">
        <h1 className="tituloCarrito">Carrito de compras</h1>
        {carrito.map((productoYCantidad, index) => {
          return <CartItem key={index} productoYCantidad={productoYCantidad} />;
        })}
        <button
          onClick={() => {
            clearCarrito();
          }}
          className="botonesCart"
        >
          Vaciar Carrito
        </button>
        <NavLink to={"/checkout"}>
          <button className="botonesCart">Finalizar Compra</button>
        </NavLink>
      </div>
    </>
  );
};

export default Cart;
