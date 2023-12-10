// Get references to the menu elements using querySelector
const menuToggle = document.querySelector('menu-toggle'); // Selects the first element with the class 'menu-toggle'
const menu = document.querySelector('tablet-mobile-nav-list'); // Selects the first element with the class 'hidden'

// Function to toggle menu visibility
function toggleMenu() {
  menu.classList.toggle('positioning'); // Toggle the 'show-menu' class to show/hide the menu
}

// Event listener for button click to toggle the menu
menuToggle.addEventListener('click', toggleMenu);
