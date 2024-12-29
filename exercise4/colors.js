/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

rgba(31, 127, 102, 1)
rgba(255, 200, 0, 1)
rgba(255, 123, 0, 1)
rgba(216, 1, 1, 1)
rgba(223, 4, 70, 1)
rgba(127, 31, 85, 1) 
rgba(93, 18, 199, 1)
rgba(93, 18, 199, 1)
*/
let color = document.querySelectorAll( "#colors li" );
let colorsLi = document.querySelectorAll( "#colors li div" );
let themeLi = document.querySelectorAll( "#theme li" );
colorsLi[ 0 ].addEventListener( "click", () => {
    color[ 0 ].style.borderRadius = "50%";
    color[ 0 ].style.border = "3px solid rgba(31, 127, 102, 1)";
    color[ 1 ].style.border = "none";
    color[ 2 ].style.border = "none";
    color[ 3 ].style.border = "none";
    color[ 4 ].style.border = "none";
    color[ 5 ].style.border = "none";
    color[ 6 ].style.border = "none";
    themeLi[ 0 ].style.border = "none";
    themeLi[ 1 ].style.border = "none";
    themeLi[ 2 ].style.border = "none";
    themeLi[ 3 ].style.border = "none";
    themeLi[ 4 ].style.border = "none";
    themeLi[ 0 ].style.backgroundColor = "rgba(31, 127, 102, 1)";
    themeLi[ 1 ].style.backgroundColor = "rgba(31, 127, 102, .8)";
    themeLi[ 2 ].style.backgroundColor = "rgba(31, 127, 102, .6)";
    themeLi[ 3 ].style.backgroundColor = "rgba(31, 127, 102, .4)";
    themeLi[ 4 ].style.backgroundColor = "rgba(31, 127, 102, .2)";
} );

colorsLi[ 1 ].addEventListener( "click", () => {
    color[ 1 ].style.borderRadius = "50%";
    color[ 0 ].style.border = "none";
    color[ 1 ].style.border = "3px solid rgba(255, 200, 0, 1)";
    color[ 2 ].style.border = "none";
    color[ 3 ].style.border = "none";
    color[ 4 ].style.border = "none";
    color[ 5 ].style.border = "none";
    color[ 6 ].style.border = "none";
    themeLi[ 0 ].style.border = "none";
    themeLi[ 1 ].style.border = "none";
    themeLi[ 2 ].style.border = "none";
    themeLi[ 3 ].style.border = "none";
    themeLi[ 4 ].style.border = "none";
    themeLi[ 0 ].style.backgroundColor = "rgba(255, 200, 0, 1)";
    themeLi[ 1 ].style.backgroundColor = "rgba(255, 200, 0, .8)";
    themeLi[ 2 ].style.backgroundColor = "rgba(255, 200, 0, .6)";
    themeLi[ 3 ].style.backgroundColor = "rgba(255, 200, 0, .4)";
    themeLi[ 4 ].style.backgroundColor = "rgba(255, 200, 0, .2)";
} );

colorsLi[ 2 ].addEventListener( "click", () => {
    color[ 2 ].style.borderRadius = "50%";
    color[ 0 ].style.border = "none";
    color[ 1 ].style.border = "none";
    color[ 2 ].style.border = "3px solid rgba(255, 123, 0, 1)";
    color[ 3 ].style.border = "none";
    color[ 4 ].style.border = "none";
    color[ 5 ].style.border = "none";
    color[ 6 ].style.border = "none";
    themeLi[ 0 ].style.border = "none";
    themeLi[ 1 ].style.border = "none";
    themeLi[ 2 ].style.border = "none";
    themeLi[ 3 ].style.border = "none";
    themeLi[ 4 ].style.border = "none";
    themeLi[ 0 ].style.backgroundColor = "rgba(255, 123, 0, 1)";
    themeLi[ 1 ].style.backgroundColor = "rgba(255, 123, 0, .8)";
    themeLi[ 2 ].style.backgroundColor = "rgba(255, 123, 0, .6)";
    themeLi[ 3 ].style.backgroundColor = "rgba(255, 123, 0, .4)";
    themeLi[ 4 ].style.backgroundColor = "rgba(255, 123, 0, .2)";
} );

colorsLi[ 3 ].addEventListener( "click", () => {
    color[ 3 ].style.borderRadius = "50%";
    color[ 0 ].style.border = "none";
    color[ 1 ].style.border = "none";
    color[ 2 ].style.border = "none";
    color[ 3 ].style.border = "3px solid rgba(216, 1, 1, 1)";
    color[ 4 ].style.border = "none";
    color[ 5 ].style.border = "none";
    color[ 6 ].style.border = "none";
    themeLi[ 0 ].style.border = "none";
    themeLi[ 1 ].style.border = "none";
    themeLi[ 2 ].style.border = "none";
    themeLi[ 3 ].style.border = "none";
    themeLi[ 4 ].style.border = "none";
    themeLi[ 0 ].style.backgroundColor = "rgba(216, 1, 1, 1)";
    themeLi[ 1 ].style.backgroundColor = "rgba(216, 1, 1, .8)";
    themeLi[ 2 ].style.backgroundColor = "rgba(216, 1, 1, .6)";
    themeLi[ 3 ].style.backgroundColor = "rgba(216, 1, 1, .4)";
    themeLi[ 4 ].style.backgroundColor = "rgba(216, 1, 1, .2)";
} );

colorsLi[ 4 ].addEventListener( "click", () => {
    color[ 4 ].style.borderRadius = "50%";
    color[ 0 ].style.border = "none";
    color[ 1 ].style.border = "none";
    color[ 2 ].style.border = "none";
    color[ 3 ].style.border = "none";
    color[ 4 ].style.border = "3px solid rgba(223, 4, 70, 1)";
    color[ 5 ].style.border = "none";
    color[ 6 ].style.border = "none";
    themeLi[ 0 ].style.border = "none";
    themeLi[ 1 ].style.border = "none";
    themeLi[ 2 ].style.border = "none";
    themeLi[ 3 ].style.border = "none";
    themeLi[ 4 ].style.border = "none";
    themeLi[ 0 ].style.backgroundColor = "rgba(223, 4, 70, 1)";
    themeLi[ 1 ].style.backgroundColor = "rgba(223, 4, 70, .8)";
    themeLi[ 2 ].style.backgroundColor = "rgba(223, 4, 70, .6)";
    themeLi[ 3 ].style.backgroundColor = "rgba(223, 4, 70, .4)";
    themeLi[ 4 ].style.backgroundColor = "rgba(223, 4, 70, .2)";
} );

colorsLi[ 5 ].addEventListener( "click", () => {
    color[ 5 ].style.borderRadius = "50%";
    color[ 0 ].style.border = "none";
    color[ 1 ].style.border = "none";
    color[ 2 ].style.border = "none";
    color[ 3 ].style.border = "none";
    color[ 4 ].style.border = "none"
    color[ 5 ].style.border = "3px solid rgba(127, 31, 85, 1)";
    color[ 6 ].style.border = "none";
    themeLi[ 0 ].style.border = "none";
    themeLi[ 1 ].style.border = "none";
    themeLi[ 2 ].style.border = "none";
    themeLi[ 3 ].style.border = "none";
    themeLi[ 4 ].style.border = "none";
    themeLi[ 0 ].style.backgroundColor = "rgba(127, 31, 85, 1)";
    themeLi[ 1 ].style.backgroundColor = "rgba(127, 31, 85, .8)";
    themeLi[ 2 ].style.backgroundColor = "rgba(127, 31, 85, .6)";
    themeLi[ 3 ].style.backgroundColor = "rgba(127, 31, 85, .4)";
    themeLi[ 4 ].style.backgroundColor = "rgba(127, 31, 85, .2)";
} );

colorsLi[ 6 ].addEventListener( "click", () => {
    color[ 6 ].style.borderRadius = "50%";
    color[ 0 ].style.border = "none";
    color[ 1 ].style.border = "none";
    color[ 2 ].style.border = "none";
    color[ 3 ].style.border = "none";
    color[ 4 ].style.border = "none"
    color[ 5 ].style.border = "none"
    color[ 6 ].style.border = "3px solid rgba(93, 18, 199, 1)";
    themeLi[ 0 ].style.border = "none";
    themeLi[ 1 ].style.border = "none";
    themeLi[ 2 ].style.border = "none";
    themeLi[ 3 ].style.border = "none";
    themeLi[ 4 ].style.border = "none";
    themeLi[ 0 ].style.backgroundColor = "rgba(93, 18, 199, 1)";
    themeLi[ 1 ].style.backgroundColor = "rgba(93, 18, 199, .8)";
    themeLi[ 2 ].style.backgroundColor = "rgba(93, 18, 199, .6)";
    themeLi[ 3 ].style.backgroundColor = "rgba(93, 18, 199, .4)";
    themeLi[ 4 ].style.backgroundColor = "rgba(93, 18, 199, .2)";
} );

