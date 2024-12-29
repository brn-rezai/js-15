/*
  todo 1: look at index.html and style.css
  todo 2: make a square with div#square and inside that div put a filled circle 🟠
  todo 3: make a button and use events when its clicked remove the circle
*/

// ! ========== Answers ==========

const square = document.querySelector( "div#square" );
const circle = document.querySelector( "div#circle" );
const button = document.querySelector( "button#remove" );
button.addEventListener( "click", () => {
  circle.remove();
} );