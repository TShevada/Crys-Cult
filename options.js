// New file: options.js
function getParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    id: urlParams.get('id'),
    size: urlParams.get('size')
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const params = getParams();
  if (!params.id || !params.size) {
    window.location.href = 'index.html';
    return;
  }

  // Instagram DM option (replace 'your_instagram_username' with your actual username)
  document.querySelector('.instagram-dm').addEventListener('click', () => {
    const instagramUsername = 'your_instagram_username'; // REPLACE THIS
    window.location.href = `https://www.instagram.com/direct/new/?to=${instagramUsername}`;
  });

  // Metro delivery option
  document.querySelector('.metro-delivery').addEventListener('click', () => {
    window.location.href = `metro.html?id=${params.id}&size=${params.size}`;
  });
});