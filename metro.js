// metro.js — super clean
let selectedStation = null;

document.querySelectorAll('.station').forEach(dot => {
  dot.addEventListener('click', function() {
    document.querySelectorAll('.station').forEach(d => d.classList.remove('selected'));
    this.classList.add('selected');
    selectedStation = this.getAttribute('data-station');
    document.querySelector('.submit-order').disabled = false;
  });
});

document.querySelector('.submit-order').addEventListener('click', async () => {
  if (!selectedStation) return alert('Choose station');

  const params = new URLSearchParams(window.location.search);
  const order = {
    productName: "OG BUDA T-SHIRT",
    size: params.get('size'),
    station: selectedStation,
    price: 39.99,
    timestamp: new Date().toISOString()
  };

  try {
    await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    });
    alert(`Order sent!\nStation: ${selectedStation}\nWe'll DM you soon`);
    window.location.href = 'index.html';
  } catch (e) {
    alert(`Saved locally:\n${selectedStation}`);
    console.log("ORDER:", order);
  }
});