import { useContext, useEffect } from "react";
import { CartContext } from "../context/cart/CartContext";
import "../styles/Products.css";
import ProductCardInCart from "./ProductCardInCart";
import "../styles/Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  let precio = 0;
  const coso = ()=>{
    for(let i = 0;i < cart.length;i++){
      precio += cart[i].price;
    }
    return precio;
  }

  return (
    <div>
        <h1 className="price-h1">Total price $<span id="price">{coso()} </span>  </h1>

      <div className="product-container-cart">
      {cart != null
        ? cart.map((product) => {
            return <ProductCardInCart product={product} />;
          })
        : "No hay productos en el carrito"}
      </div>
    </div>
  );
};

export default Cart;
