import React from "react";
import BabyTipsLogo from "../assets/babytips-logo.png";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary d-flex justify-content-around" data-bs-theme="dark">
            <div className="d-flex align-items-center">
                <img src={BabyTipsLogo} alt="" width={70} />
                <h4>Conectando Aprendizaje</h4>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/products" className="nav-link">
                        Products
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
