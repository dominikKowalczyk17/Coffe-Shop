import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Products from "./Products";
import Review from "./Review";
import Contact from "./Contact";
import "./css/App.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
    </div>
  );
};

export default App;
