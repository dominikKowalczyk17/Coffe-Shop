import React, { useState, useEffect, useRef } from "react";
import logo from "../gfx/logo.png";

const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const headerRef = useRef(null);

  const toggleNavbar = () => {
    setNavbarActive((prev) => !prev);
    setSearchActive(false);
    setCartActive(false);
  };

  const toggleSearch = () => {
    setSearchActive((prev) => !prev);
    setNavbarActive(false);
    setCartActive(false);
  };

  const toggleCart = () => {
    setCartActive((prev) => !prev);
    setNavbarActive(false);
    setSearchActive(false);
  };

  const closeAll = () => {
    setNavbarActive(false);
    setSearchActive(false);
    setCartActive(false);
  };

  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      closeAll();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <a href="#" className="header__logo">
        <img src={logo} alt="logo" />
      </a>
      <nav className={`header__navbar ${navbarActive ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#products">Products</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header__icons">
        <div
          className="fas fa-search header__icons--icon"
          id="search-btn"
          onClick={toggleSearch}
        ></div>
        <div
          className="fas fa-shopping-cart header__icons--icon"
          id="cart-btn"
          onClick={toggleCart}
        ></div>
        <div
          className="fas fa-bars header__icons--icon"
          id="menu-btn"
          onClick={toggleNavbar}
        ></div>
      </div>
      <div className={`header__search-form ${searchActive ? "active" : ""}`}>
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>
      <div
        className={`header__cart-items-container ${cartActive ? "active" : ""}`}
      >
        <div className="header__cart-item">
          <span className="fas fa-times"></span>
          <img src="gfx/cart-item-1.png" alt="item"></img>
          <div className="header__cart-item--content">
            <h3>cart item 01</h3>
            <div className="header__cart-item--price">$15.99/-</div>
          </div>
        </div>
        <div className="header__cart-item">
          <span className="fas fa-times"></span>
          <img src="gfx/cart-item-2.png" alt="item"></img>
          <div className="header__cart-item--content">
            <h3>cart item 02</h3>
            <div className="header__cart-item--price">$15.99/-</div>
          </div>
        </div>
        <div className="header__cart-item">
          <span className="fas fa-times"></span>
          <img src="gfx/cart-item-3.png" alt="item"></img>
          <div className="header__cart-item--content">
            <h3>cart item 03</h3>
            <div className="header__cart-item--price">$15.99/-</div>
          </div>
        </div>
        <div className="header__cart-item">
          <span className="fas fa-times"></span>
          <img src="gfx/cart-item-4.png" alt="item"></img>
          <div className="header__cart-item--content">
            <h3>cart item 04</h3>
            <div className="header__cart-item--price">$15.99/-</div>
          </div>
        </div>
        <a href="#" className="header__cart--btn">
          checkout now
        </a>
      </div>
    </header>
  );
};

export default Header;
