import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import NavBarComponent from './components/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

const App = () => {
  return (
    <BrowserRouter>
      <NavBarComponent/>

      <Switch>

        <Route exact path="/">
          <h1>Estás en el Inicio</h1>
        </Route>

        <Route exact path="/cabañas">
          <ItemListContainer/>
        </Route>

        <Route exact path="/detail">
          <ItemDetailContainer/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
