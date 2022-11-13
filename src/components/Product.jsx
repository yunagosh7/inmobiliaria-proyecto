import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { oneProduct as fetchOneProduct } from "../functions/functions";
import "../styles/Product.css";

const Product = () => {
  const params = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchOneProduct(setProduct, params.id);
  }, []);

  return (
    <>
      {product != null ? (
        <div className="container p-4 w-75">
          <h2>{product.title} </h2>
          <div className="d-flex">
            <img
              alt={product.title}
              src={product.image}
              className="product-image_inProduct my-2 border p-3"
            />
            <div className="container_inProduct">
              <h4 className="product-subtitle pb-4">Description</h4>
              <p className="product-description pt-4">{product.description} </p>

              <button className="btn btn-success mx-auto mt-5">Add to cart</button>
            </div>
          </div>
        </div>
      ) : (
        "Cargando el producto"
      )}
    </>
  );
};

export default Product;
