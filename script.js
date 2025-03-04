// Carousel functionality
let currentImageIndex = 0;
const images = ["bike1.jpg", "bike2.jpg", "bike3.jpg"];

function updateCarousel() {
  const carouselImage = document.getElementById("carousel-image");
  carouselImage.src = `assets/${images[currentImageIndex]}`;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateCarousel();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateCarousel();
}

// Cart functionality
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.querySelector("#cart-items tbody");
  const total = document.getElementById("total");
  cartItems.innerHTML = "";
  let totalAmount = 0;

  cart.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>$${item.price.toFixed(2)}</td>
    `;
    cartItems.appendChild(row);
    totalAmount += item.price;
  });

  total.textContent = `$${totalAmount.toFixed(2)}`;
}

function payNow() {
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
}

// Initialize carousel on product pages
if (document.getElementById("carousel-image")) {
  updateCarousel();
}

// Initialize cart on cart page
if (document.getElementById("cart-items")) {
  updateCart();
}


// Newsletter form submission
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for subscribing!");
});