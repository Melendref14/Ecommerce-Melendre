import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <a className="navbar-brand mx-2" href="#">
        Ecommerce Melendre
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/Ropa">
              Ropa
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/Zapatos">
              Zapatos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/Accesorios">
              Accesorios
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn navbar-brand mx-2">
          <CartWidget />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
