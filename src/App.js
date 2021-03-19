import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBarComponent from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/CartComponent/Cart";
import CartContext from "./context/CartContext";
import { useState } from "react";

const App = () => {
  const carro = localStorage["carritoStorage"]
    ? JSON.parse(localStorage["carritoStorage"])
    : [];
  const [carrito, setCarrito] = useState(carro);

  const value = { carrito, setCarrito };

  console.log(carrito);

  return (
    <CartContext.Provider value={value}>
      <BrowserRouter>
        <NavBarComponent />

        <Switch>
          <Route exact path="/">
            <br />
            <br />
            <h1>Bienvenido a la Tienda Cucalambe!</h1>
          </Route>

          <Route exact path="/productos">
            <ItemListContainer />
          </Route>

          <Route exact path="/categoria/:productoId">
            <ItemListContainer />
          </Route>

          <Route exact path="/detail/:productoId">
            <ItemDetailContainer />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route exact path="*">
            <br />
            <br />
            <h2 className="notFound">Not Found</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;
