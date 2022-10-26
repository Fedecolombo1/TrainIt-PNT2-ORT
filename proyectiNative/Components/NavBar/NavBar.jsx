import "./NavBar.css";
import './navMenu.css'
import "bootstrap/dist/css/bootstrap.min.css";
import CardWidget from "./CartWidget/CardWidget";
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Redirect } from "react-router";

const NavBar = () => {
  /* Burger menu
    const burger = () => {
    var burger = document.getElementsByClassName('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    burger.style.padding = '16px 16px 200vw 200vw';
    links.style.display = 'flex';
    quit.style.display = 'inline';
  }
  
  function quit(){
    var burger = document.getElementsByClassName('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    burger.style.padding = '16px 16px 32px 32px';
    links.style.display = 'none';
    quit.style.display = 'none';
  } */

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
      <header className="navbar row col-12 desk">
        <Link className="col-2" to="/">
          <h1 className="col-12 nombre">Escala</h1>
        </Link>
        <div className="col-6 row align">
            <h2 className="col-2 align links">
              <Link to="/category/cursos" className="navLinks">
                  Cursos
              </Link>
            </h2>

            
            <h2 className="col-2 align links">
              <Link to="/category/recursos" className="navLinks">
                  Recursos
              </Link>
            </h2>

            <h2 className="col-2 align links">
              <NavLink to="/" className="navLinks">
                  Formacion
              </NavLink>
            </h2>

            
            <h2 className="col-2 align links">
              <NavLink to="/" className="navLinks">
                  Nosotros
              </NavLink>
            </h2>

            <h2 className="col-2 align links">
              <NavLink to="/" className="navLinks">
                  Contacto
              </NavLink>
            </h2>
          <CardWidget />
        </div>
        <a
          className="col-2"
          style={{
            justifyContent: "flex-end",
            display: "flex",
            textDecoration: "none",
          }}
          href="https://fedecolombo1.github.io/Home/"
        >
          <button style={{ marginRight: "6%" }} className="col-6 botonC">
            Ver Cursos
          </button>
        </a>
        <div id="progressbar2"></div>
      </header>

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

        <CardWidget />
      </header>

      <div id="progressbar"></div>
    </>
  );
};

export default NavBar;
