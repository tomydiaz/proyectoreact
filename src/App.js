import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import NavBarComponent from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBarComponent/>

      <Switch>

        <Route exact path="/">
          <ItemListContainer/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
