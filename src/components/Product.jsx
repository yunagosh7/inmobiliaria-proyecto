import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/cart/CartContext";
import { oneProduct as fetchOneProduct } from "../functions/functions";
import "../styles/Product.css";

const Product = () => {


  const params = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchOneProduct(setProduct, params.id);
  }, []);

  return (
    <div className="container ">
      {product != null ? (
        <div className="container info-product p-4 w-75">
          <h2 className="product-title-inProduct">{product.title} </h2>
          <div className="d-flex flex-column product-image-description">
            <img
              alt={product.title}
              src={product.image}
              className="product-image_inProduct my-2 border p-3"
            />
            <div className="container_inProduct">
              <h4 className="product-subtitle pb-4">Description</h4>
              <p className="product-description pt-4">{product.description} </p>

              <button className="btn btn-success mx-auto mt-5" >Add to cart</button>
            </div>
          </div>
        </div>
      ) : (
        "Loading the product"
      )}
    </div>
  );
};

export default Product;
