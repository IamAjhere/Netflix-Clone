import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />
      <div className="nav__options">
        <button>Home</button>
        <button>Tv Shows</button>
        <button>Movies</button>
        <button>New & Popular</button>
        <button>My List</button>
      </div>
      <div>
        <img
          className="nav__bell"
          src="https://img.icons8.com/material/24/000000/bell--v1.png"
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Logo"
        />
      </div>
    </div>
  );
}

export default Nav;
