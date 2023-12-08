import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__share">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
      </div>
      <div className="footer__links">
        <a href="#">home</a>
        <a href="#">about</a>
        <a href="#">menu</a>
        <a href="#">products</a>
        <a href="#">review</a>
        <a href="#">contact</a>
      </div>
    </section>
  );
};

export default Footer;
