import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBarComponent from './components/NavBar/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import CartContext from "../src/context/CartContext.jsx"

const App = () => {
  return (
    <CartContext.Provider value={[]}>
      <BrowserRouter>
        <NavBarComponent/>

        <Switch>

          <Route exact path="/">
            <h1>Estás en el Inicio</h1>
          </Route>

          <Route exact path="/productos">
            <ItemListContainer/>
          </Route>

          <Route exact path="/categoria/:productoId">
            <ItemListContainer/>
          </Route>

          <Route exact path="/detail/:productoId">
            <ItemDetailContainer/>
          </Route>

          <Route exact path="*">
            <h2 className="notFound">Not Found</h2>
          </Route>

        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
