import { createContext } from "react";

const StockContext = createContext({
  stocks: [],
  setStocks: () => {},
});

export default StockContext;
