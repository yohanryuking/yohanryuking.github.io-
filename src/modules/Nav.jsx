import React from "react";
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
import "./nav.css"

const Nav = ({fes}) => {
  const navigate = useNavigate();

  const mostrarHome = () => {
    navigate("/");
  }

  const mostrarCtag= () => {
    navigate("/catalogo");
  }

  return (
    <div className="nav__container">
      <div className="logo spr">
        <img src={logo} alt="" className="logo__img" />
      </div>
      <nav className="nav spr">
        <ul className="nav-ul">
          <li className="nav-ul-li" onClick={mostrarHome}>Home </li>
          <li className="nav-ul-li" onClick={mostrarCtag}>Catálogo </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
