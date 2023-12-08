import React from "react";
import quoteImg from "../gfx/quoteImg.png";
import userImg from "../gfx/userImg.png";

const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="review__heading">
        customer's <span>reviews</span>
      </h1>
      <div className="review__box-container">
        <div className="review__box">
          <img src={quoteImg} className="review__quote" alt="img" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus
            est sapiente magni consequuntur aut repellendus qui et vero magnam.
          </p>
          <img src={userImg} className="review__user" alt="img" />
          <h3>John Doe</h3>
          <div className="review__stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
        </div>
        <div className="review__box">
          <img src={quoteImg} className="review__quote" alt="img" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus
            est sapiente magni consequuntur aut repellendus qui et vero magnam.
          </p>
          <img src={userImg} className="review__user" alt="img" />
          <h3>John Doe</h3>
          <div className="review__stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
        </div>
        <div className="review__box">
          <img src={quoteImg} className="review__quote" alt="img" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus
            est sapiente magni consequuntur aut repellendus qui et vero magnam.
          </p>
          <img src={userImg} className="review__user" alt="img" />
          <h3>John Doe</h3>
          <div className="review__stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
