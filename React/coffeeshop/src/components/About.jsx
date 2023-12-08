import React from "react";
import about from "./public/about-img.png";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="about__heading">
        <span>about</span> us
      </h1>
      <div className="about__row">
        <div className="about__image">
          <img src={about} alt="" />
        </div>
        <div className="about__content">
          <h3>what makes our coffee special?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia
            provident nihil eius cupiditate dignissimos exercitationem. Eos
            doloremque totam provident, tenetur eligendi architecto nulla
            repudiandae vitae minus quaerat praesentium nobis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae modi nisi ea placeat numquam laboriosam culpa dolorum
            qui aperiam ratione.
          </p>
          <a href="#" className="about__btn">
            learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
