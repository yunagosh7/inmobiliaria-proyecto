import { useContext } from "react";
import "../styles/ProductCardInCart.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/cart/CartContext";

const ProductCardInCart = (props) => {
  const params = useParams();

  const { removeProduct } = useContext(CartContext);

  return (
    <div className="card mx-auto my-2">
      <img
        src={props.product.image}
        className="card-img-top product-image"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.title} </h5>
        <h6 className="card-subtitle text-muted mb-2">
          ${props.product.price}
        </h6>
          <NavLink
            to={`/product/${props.product.id}`}
            className="btn btn-primary mb-2"
          >
            Go to page
          </NavLink>
          <button className="btn btn-danger" onClick={()=>removeProduct(props.product.id)}>Remove from cart</button>
      </div>
    </div>
  );
};

export default ProductCardInCart;
