import React from "react";
import img1 from "./gfx/menu-img1.png";
import img2 from "./gfx/menu-img2.png";
import img3 from "./gfx/menu-img3.png";
import img4 from "./gfx/menu-img4.png";
import img5 from "./gfx/menu-img5.png";
import img6 from "./gfx/menu-img6.png";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <h1 className="menu__heading">
        our <span>menu</span>
      </h1>
      <div className="menu__box-container">
        <div className="menu__box">
          <img src={img1} alt="" className="menu__img" />
          <h3>tasty and healthy</h3>
          <div className="menu__price">
            $15.99 <span>20.99</span>
          </div>
          <a href="#" className="menu__btn">
            add to cart
          </a>
        </div>
        <div className="menu__box">
          <img src={img2} alt="" className="menu__img" />
          <h3>tasty and healthy</h3>
          <div className="menu__price">
            $15.99 <span>20.99</span>
          </div>
          <a href="#" className="menu__btn">
            add to cart
          </a>
        </div>
        <div className="menu__box">
          <img src={img3} alt="" className="menu__img" />
          <h3>tasty and healthy</h3>
          <div className="menu__price">
            $15.99 <span>20.99</span>
          </div>
          <a href="#" className="menu__btn">
            add to cart
          </a>
        </div>
        <div className="menu__box">
          <img src={img4} alt="" className="menu__img" />
          <h3>tasty and healthy</h3>
          <div className="menu__price">
            $15.99 <span>20.99</span>
          </div>
          <a href="#" className="menu__btn">
            add to cart
          </a>
        </div>
        <div className="menu__box">
          <img src={img5} alt="" className="menu__img" />
          <h3>tasty and healthy</h3>
          <div className="menu__price">
            $15.99 <span>20.99</span>
          </div>
          <a href="#" className="menu__btn">
            add to cart
          </a>
        </div>
        <div className="menu__box">
          <img src={img6} alt="" className="menu__img" />
          <h3>tasty and healthy</h3>
          <div className="menu__price">
            $15.99 <span>20.99</span>
          </div>
          <a href="#" className="menu__btn">
            add to cart
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
