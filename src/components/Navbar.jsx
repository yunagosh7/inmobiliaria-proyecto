import {useState} from "react";
import "../styles/Navbar.css"

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">
          Ecommerce
        </a>

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
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/products"
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <a href="/cart" className="position-relative cart-icon">
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
          <div className="circle rounded-circle text-white  ">0</div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
