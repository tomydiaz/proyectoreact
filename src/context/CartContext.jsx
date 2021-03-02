import { createContext } from "react";

const CartContext = createContext({
    carrito: [],
    setCarrito: () => {}
});

export default CartContext