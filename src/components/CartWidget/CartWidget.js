import Cart from "../../images/cart.png";
import { NavLink } from "react-router-dom";

const CartWidgetComponent = () => {
  return (
    <>
      <NavLink to={"/cart"}>
        <img src={Cart} alt="cart" id="cartLogo" />
      </NavLink>
    </>
  );
};

export default CartWidgetComponent;
