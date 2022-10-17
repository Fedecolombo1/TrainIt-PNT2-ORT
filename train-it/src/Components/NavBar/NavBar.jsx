import "./NavBar.css";
import './navMenu.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

  useEffect(() => {
    let progress = document.getElementById("progressbar");
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = () => {
      let progressHeight = (window.pageYOffset / totalHeight) * 100;
      progress.style.width = progressHeight + "%";
    };
  }, []);


  return (
    <>
      <header className="col-12 align mobile">
        <nav className="col-4 align navbar">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />

              <span></span>
              <span></span>
              <span></span>

              <ul className='col-12 row' id="menu">
                <NavLink
                  to="/"
                >
                  <li className='col-12'>Home</li>
                </NavLink>
                <NavLink
                  to="/category/cursos"
                >
                  <li className='col-12'>Cursos</li>
                </NavLink>
                <NavLink
                  to="/category/recursos"
                >
                  <li className='col-12'>Recursos</li>
                </NavLink>
                <NavLink
                  to="/cart"
                >
                  <li className='col-12'>Carrito</li>
                </NavLink>
              </ul>
            </div>
          </nav>
        </nav>

        <NavLink
          activeClassName="activeNav"
          className="col-4 row align nombre"
          to="/"
        >
          Escala
        </NavLink>

      </header>

      <div id="progressbar"></div>
    </>
  );
};

export default NavBar;
