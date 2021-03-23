import React from "react";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";

const FormCheckOut = () => {
  const { carrito } = useContext(CartContext);

  let orden;

  let total = 0;

  let comprador;

  let [nombre, setNombre] = useState("");

  let [email, setEmail] = useState("");

  let [telefono, setTelefono] = useState("");

  carrito.forEach((unidad) => {
    total = total + unidad.producto.precio * unidad.cantidad;
  });

  const confirmar = (nombre, email, telefono) => {
    if (nombre !== "" && email !== "" && telefono.toString() !== "") {
      let persona = {
        nombre: nombre,
        email: email,
        telefono: telefono,
      };
      comprador = persona;

      orden = {
        comprador: comprador,
        items: carrito,
        total: total,
      };

      alert(orden);
      // ----------- acá mandar la orden a firebase
      localStorage.clear();
    } else {
      alert("Por favor, complete todos los campos");
    }
  };

  return (
    <>
      <div className="form">
        <form>
          <p>
            <label>E-mail:</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="campoForm"
              type="text"
              placeholder="Ingrese su E-mail"
              id="email"
            ></input>
          </p>
          <p>
            <label>Nombre:</label>
            <input
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              className="campoForm"
              type="text"
              placeholder="Ingrese su nombre"
              id="nombre"
            ></input>
          </p>
          <p>
            <label>Teléfono:</label>
            <input
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
              className="campoForm"
              type="number"
              placeholder="Ingrese su teléfono"
              id="telefono"
            ></input>
          </p>
          <b className="total">Total a pagar: ${total}</b>
          <button
            onClick={(e) => {
              confirmar(nombre, email, telefono);
            }}
          >
            Confirmar Pago
          </button>
        </form>
      </div>
    </>
  );
};

export default FormCheckOut;
