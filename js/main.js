//mouseover middle page rectangle and page background color turns blue

let midPageRectangle = document.querySelector(".tm-tag-line");
let changeBackgroundColor = () => document.body.style.backgroundColor = "beige";
midPageRectangle.addEventListener('mouseover', changeBackgroundColor);

//Click on buy button and an alert pops up //need to extend code to all buttons

let buyButtons = document.querySelector(".tm-buy-box");
let createItemToBasketMessage = () => alert("Item added to your basket");
buyButtons.addEventListener('click', createItemToBasketMessage);

//keyup input and generatas 'How are you'  //need to fix bug of prompt popping up at every keep pressed

let searchButton = document.querySelector(".tm-search-input");
let createHowAreYouPrompt = () => prompt("How are you today");
searchButton.addEventListener("keyup", createHowAreYouPrompt, false);









