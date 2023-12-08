import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="contact__heading">
        <span>contact</span> us
      </h1>
      <div className="contact__row">
        <iframe
          className="contact__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.46656934128!2d20.896389617026557!3d52.23303347779464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1701962445854!5m2!1spl!2spl"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <form action="">
          <h3>get in touch</h3>
          <div className="contact__inputBox">
            <span className="fas fa-user"></span>
            <input type="text" placeholder="name" />
          </div>
          <div className="contact__inputBox">
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder="email" />
          </div>
          <div className="contact__inputBox">
            <span className="fas fa-phone"></span>
            <input type="number" placeholder="number" />
          </div>
          <input type="submit" value="contact now" className="contact__btn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
