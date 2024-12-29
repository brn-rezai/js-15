// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:

let spanCircles = document.querySelectorAll( "span.circle" );
for ( let x of spanCircles ) {
    x.classList.toggle( "blue" );
    x.classList.toggle( "purple" );
}

