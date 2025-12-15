// Updated product.js
const products = {
  1: {
    id: 1,
    name: "OG BUDA T-SHIRT",
    image: "images/1.jpg",
    price: 39.99,
    description: "Classic OG Buda t-shirt with premium quality print. Made from 100% cotton for maximum comfort."
  }
};

function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

function displayProductDetails() {
  const productId = getProductIdFromUrl();
  const product = products[productId];
  
  if (!product) {
    window.location.href = 'index.html';
    return;
  }
  
  document.title = `CRYS | ${product.name}`;
  
  const productDetailsContainer = document.querySelector('.product-details');
  
  productDetailsContainer.innerHTML = `
    <div class="product-gallery">
      <img src="${product.image}" alt="${product.name}" class="main-image">
    </div>
    <div class="product-info">
      <h1>${product.name}</h1>
      <span class="product-price">$${product.price.toFixed(2)}</span>
      <p class="product-description">${product.description}</p>
      
      <div class="size-options">
        <h3>Select Size</h3>
        <div class="size-buttons">
          <button class="size-btn" data-size="S">S</button>
          <button class="size-btn" data-size="M">M</button>
          <button class="size-btn" data-size="L">L</button>
          <button class="size-btn" data-size="XL">XL</button>
        </div>
      </div>
      
      <button class="btn btn-primary proceed-to-options" disabled>Proceed to Options</button>
      <a href="index.html" class="back-to-shop">← Back to Shop</a>
    </div>
  `;
  
  // Size selection logic
  const sizeButtons = document.querySelectorAll('.size-btn');
  let selectedSize = null;
  sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
      sizeButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
      selectedSize = button.dataset.size;
      document.querySelector('.proceed-to-options').disabled = false;
    });
  });
  
  // Proceed to options page
  document.querySelector('.proceed-to-options').addEventListener('click', () => {
    window.location.href = `options.html?id=${product.id}&size=${selectedSize}`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayProductDetails();
});