// Get references to the menu elements using querySelector
const menuToggle = document.querySelector('#menu-toggle'); // Selects the first element with the class 'menu-toggle'
const menu = document.querySelector('tablet-mobile-nav-list'); // Selects the first element with the class 'hidden'

// Function to toggle menu visibility
function toggleMenu() {
  menu.classList.toggle('positioning'); // Toggle the 'show-menu' class to show/hide the menu
}

// Event listener for button click to toggle the menu
menuToggle.addEventListener('click', toggleMenu);


// Carousel Logic
let commentIndex = 0;

var x = window.matchMedia('(max-width: 435px)');

setInterval(() => {slideNo(commentIndex, x)}, 2000);

x.addEventListener("change", () => {
  slideNo(commentIndex, x);
})


function slideNo(n, x) {
  let comments = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if(x.matches){
    
    if (n >= comments.length) commentIndex = 0;
    for (var i = 0; i < comments.length; i++) {
      comments[i].style.display = "none";
      dots[i].style.backgroundColor = "transparent"
    }

    dots[commentIndex].style.backgroundColor = "#f8613f"
    comments[commentIndex].style.display = "block";
    commentIndex += 1;
  }else{
    for (var i = 0; i < comments.length; i++) {
      comments[i].style.display = "grid";
    }
  }
  
}
