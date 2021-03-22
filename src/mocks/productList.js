import cab4 from "../images/cab4.jpg";
import cab5 from "../images/cab5.jpg";
import mono from "../images/mono.jpg";
import monoGde from "../images/monoGde.jpg";
import a from "../images/a.jpg";
import b from "../images/b.jpg";

const productList = [
  {
    id: 1,
    idCategoria: 1,
    name: "Remera Azul",
    precio: 1350,
    talle: "XL",
    mtsCuadrados: 55,
    img: cab4,
    descripcion:
      "Remera común de color Azul. 100% Algodon. Se puede lavar en lavarropas.",
    cantidad: 0,
  },
  {
    id: 2,
    idCategoria: 2,
    name: "Buzo Negro",
    precio: 2150,
    talle: "L",
    mtsCuadrados: 62,
    img: cab5,
    descripcion:
      "Buzo liso color Negro. Algodón. Se puede lavar en lavarropas.",
    cantidad: 0,
  },
  {
    id: 3,
    idCategoria: 3,
    name: "Pantalón Jogging Negro",
    precio: 1500,
    talle: 38,
    mtsCuadrados: 26,
    img: mono,
    descripcion: "Pantalón jogging color Negro. Elastizado",
    cantidad: 0,
  },
  {
    id: 4,
    idCategoria: 1,
    name: "Remera Roja",
    precio: 1200,
    talle: "M",
    mtsCuadrados: 40,
    img: monoGde,
    descripcion:
      "Remera común de color Rojo. 100% Algodon. Se puede lavar en lavarropas.",
    cantidad: 0,
  },
  {
    id: 5,
    idCategoria: 2,
    name: "Buzo Gris",
    precio: 2000,
    talle: "XS",
    mtsCuadrados: 40,
    img: a,
    descripcion: "Buzo liso color Gris. Algodón. Se puede lavar en lavarropas.",
    cantidad: 0,
  },
  {
    id: 6,
    idCategoria: 3,
    name: "Pantalón Jean",
    precio: 1800,
    talle: "42",
    mtsCuadrados: 40,
    img: b,
    descripcion: "Pantalón jean color Azul.",
    cantidad: 0,
  },
];

export default productList;
