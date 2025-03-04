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
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");
  cartItems.innerHTML = "";
  let totalAmount = 0;

  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(itemElement);
    totalAmount += item.price;
  });

  total.textContent = `Total: $${totalAmount.toFixed(2)}`;
}

function payNow() {
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
}

// Newsletter form submission
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for subscribing!");
});