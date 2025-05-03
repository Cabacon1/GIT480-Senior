// strict mode

"use strict";

// Hamburger menu
// This code toggles the visibility of a hamburger menu and an off-screen menu when the hamburger icon is clicked.
// It also closes the menu when a link is clicked or when clicking outside of the menu.

let hamMenu = document.querySelector(".ham-menu");

let offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// Close the menu when a link is clicked
let menuLinks = document.querySelectorAll(".off-screen-menu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
  });
});

// Close the menu when clicking outside of it
document.addEventListener("click", (event) => {
  if (
    !hamMenu.contains(event.target) &&
    !offScreenMenu.contains(event.target)
  ) {
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
  }
});


// Product List
const products = [
  {
    id: 1,
    name: "Standard",
    description: "A dozen 3-4in cookies of one simple design with limited colors. This option is perfect for place cards or party favors.",
    price: 60,
    image: "images/StandardCookie.jpg"
  },
  {
    id: 2,
    name: "Deluxe",
    description: "A dozen 3-4 cookies designed and decorated based on the theme of your choosing. Standard designs may include piping, simpler florals, hand drawn elements, simple painting, and larger lettering.",
    price: 72,
    image: "images/Basketball.JPG"
  },
  {
    id: 3,
    name: "Luxury",
    description: "A dozen 3-4 cookies designed and decorated to add something special to your event. Deluxe designs may include a variety of design techniques, such as hand painting, sculpting, metallics, hand drawn details, piped elements, fine line work/lettering, etc. ",
    price: 96,
    image: "images/Luxury.jpg"
  },
  {
    id: 4,
    name: "Mini",
    description: "A dozen bite-sized cookies with simple designs that will go perfectly with the theme of your choosing.",
    price: 48,
    image: "images/MiniCookie.jpg"
  },
  {
    id: 5,
    name: "Drop Cookies",
    description: "A dozen 2-3oz drop cookies in the flavor of your choice. A great add-on to decorated sets for those who prefer more traditional dessert style cookie.",
    price: 36,
    image: "images/Drop Cookie.jpg"
  },
];

// Display products
// This code dynamically creates a list of products and appends them to the product list container in the HTML.
// It uses the product data to create list items with images, names, descriptions, prices, and "Add to Cart" buttons.   

products.forEach((product) => {
  let productListContainer = document.getElementById("product-list");
  let listItem = document.createElement("li");
  
  listItem.classList.add("product-card");
  listItem.innerHTML = `
    <img class="product-card-image" src="${product.image}" alt="${product.name}">
    <div class="product-card-details">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
    </div>
    <div class="product-card-actions">
      <button class="add-to-cart " data-id="${product.id}">Add to Cart</button>
    </div>
    `;
  productListContainer.appendChild(listItem);
});

// Save products that are added to the cart in local storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let productId = parseInt(button.getAttribute("data-id"));
    let product = products.find((p) => p.id === productId);
    if (product) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} has been added to your cart!`);
    }
  });
});


// unable to add to cart
// I have tried to add a function that would take the products added from the Product.html and display it in the checkout.html page.
// My attempts have failed each time.  
// I am able to save the products to local storage.  But I unsuccessfully tried to display the products in the checkout.html page.