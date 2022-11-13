import "../styles/ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="card mx-auto my-2">
      <img src={props.image} className="card-img-top product-image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle text-muted mb-2">$ {props.price} </h6>
      </div>
      <div className="product-buttons mb-3">
        <a href={`/product/${props.id}`} className="btn btn-primary">
          Ir a la página
        </a>
        <button className="btn btn-success mx-2">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
