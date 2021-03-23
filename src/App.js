import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBarComponent from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/CartComponent/Cart";
import CartContext from "./context/CartContext";
import StockContext from "./context/StockContext";
import { useState } from "react";
import FormCheckOut from "./components/FormCheckOut/FormCheckOut";
import FinCompra from "./components/FinCompra/FinCompra";

const App = (props) => {
  const [carrito, setCarrito] = useState(props.carro);

  const value = { carrito, setCarrito };

  let [stocks, setStocks] = useState(props.stocks);

  let stockks = { stocks, setStocks };

  return (
    <StockContext.Provider value={stockks}>
      <CartContext.Provider value={value}>
        <BrowserRouter>
          <NavBarComponent />

          <Switch>
            <Route exact path="/">
              <h1 className="bienvenido">Bienvenido a la Tienda Cucalambe!</h1>
            </Route>

            <Route exact path="/productos">
              <ItemListContainer />
            </Route>

            <Route exact path="/categoria/:productoId">
              <ItemListContainer />
            </Route>

            <Route exact path="/detail/:productoId">
              <ItemDetailContainer carro={props.carro} />
            </Route>

            <Route exact path="/cart">
              <Cart />
            </Route>

            <Route exact path="/checkout">
              <FormCheckOut />
            </Route>

            <Route exact path="/gracias">
              <FinCompra />
            </Route>

            <Route exact path="*">
              <h2 className="notFound">Not Found</h2>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    </StockContext.Provider>
  );
};

export default App;
