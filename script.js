// Cart functionality
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
  showModal();
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
}

function showModal() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = "flex";
}

function hideModal() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = "none";
}

function viewCart() {
  hideModal();
  window.location.href = "cart.html"; // Redirect to cart page
}

function continueShopping() {
  hideModal();
  window.location.href = "bikes.html"; // Redirect to bikes page
}

// Load cart from localStorage on page load
function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

// Initialize cart on product pages
if (document.getElementById("cart-modal")) {
  loadCart();
}

// Initialize cart on cart page
if (document.getElementById("cart-items")) {
  loadCart();
  updateCartDisplay();
}

// Update cart display on cart page
function updateCartDisplay() {
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

// Carousel functionality (for product pages)
let currentImageIndex = 0;
const images = ["bike1.jpg", "bike2.jpg", "bike3.jpg"];

function updateCarousel() {
  const carouselImage = document.getElementById("carousel-image");
  if (carouselImage) {
    carouselImage.src = `assets/${images[currentImageIndex]}`;
  }
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateCarousel();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateCarousel();
}

// Initialize carousel on product pages
if (document.getElementById("carousel-image")) {
  updateCarousel();
}

// Newsletter form submission
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for subscribing!");
});