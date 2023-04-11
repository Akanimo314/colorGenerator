let css = document.querySelector("h3");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector(".color2");
let color3 = document.getElementsByClassName("color3")[0];
let body = document.getElementById("gradient");



// color1.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to right, " + color1.value 
//     + ", " + color2.value + ", " + color3.value + ")";
// })

// color2.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to right, " + color1.value 
//     + ", " + color2.value + "," + color3.value + ")";
// })

// color3.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to right, " + color1.value 
//     + ", " + color2.value + ", " + color3.value, + ")";
//     css.textContent = body.style.background + ", ";
// })

function colorGradient(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ", " 
    + color3.value, 
    + ")";
    css.textContent = body.style.background + ", ";
}

color1.addEventListener("input", colorGradient);
color2.addEventListener("input", colorGradient);
color3.addEventListener("input", colorGradient);

// you can still copy the funvction name colorGradient() 
// and use oninput in your html instead of using addEventListener
