import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(CartContext)

  return (
    <nav className="navbar navbar-expand-lg bg-primary   w-100">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light" to="/">
          Ecommerce
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link active text-light"
                aria-current="page"
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/">
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/">
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/cart" className="position-relative cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-bag cart-svg text-white"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
          <div className="circle rounded-circle text-white  ">{cart.length} </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
