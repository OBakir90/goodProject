//mouseover middle page rectangle and page background color turns beige

let midPageRectangle = document.querySelector(".tm-tag-line");
let changeBackgroundColor = () => document.body.style.backgroundColor = "beige";
midPageRectangle.addEventListener('mouseover', changeBackgroundColor);

//Click on buy buttons and an alert pops up 

let buyButtons = document.querySelectorAll(".tm-buy-box");
buyButtons.forEach((button) => {
   function createMessage () {
       alert("Item added to your basket");
    }
    button.addEventListener('click', createMessage);
})

// prompt pop up after 5 seconds of page upload  
document.onload = setTimeout(function () { prompt('Hello! Register to our Newsletter by entering your email address and receive 20% discount'); }, 5000);
document.addEventListener("load", setTimeout);










