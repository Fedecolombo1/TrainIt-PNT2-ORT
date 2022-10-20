import "./NavBar.css";
import './navMenu.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

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
                
              </ul>
            </div>
          </nav>
        </nav>

        

      </header>

      <div id="progressbar"></div>
    </>
  );
};

export default NavBar;
