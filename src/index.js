import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import mockStocks from "./mocks/stocks";
import initialStocks from "./mocks/stocksIniciales";

const carro = localStorage["carritoStorage"]
  ? JSON.parse(localStorage["carritoStorage"])
  : [];

let stocks = localStorage["stocks"]
  ? JSON.parse(localStorage["stocks"])
  : mockStocks;

if (carro.length === 0) {
  stocks = initialStocks;
}

ReactDOM.render(
  <React.StrictMode>
    <App carro={carro} stocks={stocks} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
