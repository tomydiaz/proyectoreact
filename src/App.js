import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBarComponent from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContext from "../src/context/CartContext.jsx";
import { useState } from "react";

const App = () => {
  const [carrito, setCarrito] = useState([]);
  return (
    <CartContext.Provider value={carrito}>
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
