import React from "react";
import product1 from "./gfx/product-img1.png";

const Products = () => {
  return (
    <section className="products" id="products">
      <h1 className="products__heading"></h1>
      <div className="products__box-container">
        <div className="products__box">
          <div className="products__icons">
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
          </div>
          <div className="products__image">
            <img src={product1} alt="" />
          </div>
          <div className="products__content">
            <h3>fresh coffee</h3>
            <div className="products__stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <div className="products__price">
              $15.99 <span>$20.99</span>
            </div>
          </div>
        </div>
        <div className="products__box">
          <div className="products__icons">
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
          </div>
          <div className="products__image">
            <img src={product1} alt="" />
          </div>
          <div className="products__content">
            <h3>fresh coffee</h3>
            <div className="products__stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <div className="products__price">
              $15.99 <span>$20.99</span>
            </div>
          </div>
        </div>
        <div className="products__box">
          <div className="products__icons">
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
          </div>
          <div className="products__image">
            <img src={product1} alt="" />
          </div>
          <div className="products__content">
            <h3>fresh coffee</h3>
            <div className="products__stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <div className="products__price">
              $15.99 <span>$20.99</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
