import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
};

export default App;
