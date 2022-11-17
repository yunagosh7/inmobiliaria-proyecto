import "../styles/ProductCard.css";
import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
import { NavLink } from "react-router-dom";

const ProductCard = (props) => {

  const { addProductToCart } = useContext(CartContext);


  return (
    <div className="card mx-auto my-2">
      <img src={props.image} className="card-img-top product-image p-3 mx-auto" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle text-muted mb-2">$ {props.price} </h6>
      </div>
      <div className="product-buttons mb-3">
        <NavLink to={`/product/${props.id}`} className="btn btn-primary">
          Go to page
        </NavLink>
        <button className="btn btn-success mx-2" onClick={()=> addProductToCart(props.product)} >Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
