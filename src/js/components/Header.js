class Header {
  constructor() {
    document.addEventListener("DOMContentLoaded", this.init.bind(this));
  }

  init() {
    // Element selectors
    this.navbar = document.querySelector(".header__navbar");
    this.menuBtn = document.querySelector("#menu-btn");
    this.searchForm = document.querySelector(".header__search-form");
    this.searchBtn = document.querySelector("#search-btn");
    this.cartItem = document.querySelector(".header__cart-items-container");
    this.cartBtn = document.querySelector("#cart-btn");

    // Event listeners
    this.menuBtn.addEventListener("click", this.toggleNavbar.bind(this));
    this.searchBtn.addEventListener("click", this.toggleSearch.bind(this));
    this.cartBtn.addEventListener("click", this.toggleCart.bind(this));
    window.addEventListener("scroll", this.closeAll.bind(this));
  }

  closeAll() {
    this.navbar.classList.remove("active");
    this.searchForm.classList.remove("active");
    this.cartItem.classList.remove("active");
  }

  toggleNavbar() {
    this.navbar.classList.contains("active") ? null : this.closeAll();
    this.navbar.classList.toggle("active");
  }

  toggleSearch() {
    this.searchForm.classList.contains("active") ? null : this.closeAll();
    this.searchForm.classList.toggle("active");
  }

  toggleCart() {
    this.cartItem.classList.contains("active") ? null : this.closeAll();
    this.cartItem.classList.toggle("active");
  }
}

export default new Header();
