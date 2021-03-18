import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
  const onAdd = (cantidad, producto) => {
    alert(`Agregaste al carrito ${cantidad} ${producto.name}`);
  };

  return (
    <>
      <div className="card">
        <img alt="Foto Detail" className="imgDetail" src={props.producto.img} />
        <h3 className="textoCard">{props.producto.name}</h3>
        <p className="textoCard">
          <b>Precio: $</b>
          {props.producto.precio}
        </p>
        <p className="textoCard">
          <b>Talle: </b>
          {props.producto.talle}
        </p>
        <p className="textoCard">
          <b>Descripcion: </b>
          {props.producto.descripcion}
        </p>
        <ItemCount
          producto={props.producto}
          stock={props.producto.stock}
          onAdd={onAdd}
          contador={props.contador}
          sumar={props.sumar}
          restar={props.restar}
        />
      </div>
    </>
  );
};

export default ItemDetail;
