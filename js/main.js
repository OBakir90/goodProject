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




// Add to cart

const mediaName = document.querySelectorAll('.media h5')
const mediaPrice = document.querySelectorAll('.media span')
const buttons = document.querySelectorAll('a.tm-buy')
const cart = document.querySelector('.cart-preview-passive')
const cartProduct = document.getElementById('cart_product')
const cartAmount = document.getElementById('cart_amount')
const cartImg = document.querySelectorAll('.nav-item')[3]


buttons.forEach((button, index) => {
    function clicked() {
        const newRow = document.createElement('tr')
        const newColumn1 = document.createElement('th')
        const newColumn2 = document.createElement('th')
        newColumn1.innerText = mediaName[index].textContent
        newColumn2.innerText = mediaPrice[index].textContent
        newRow.appendChild(newColumn1)
        newRow.appendChild(newColumn2)
        cart.querySelector('table').appendChild(newRow)
    }
    button.addEventListener('click', clicked)
})

cartImg.addEventListener('click', () => cart.className === 'cart-preview-passive' ? cart.className = 'cart-preview-active' : cart.className = 'cart-preview-passive')


// Search Album

const searchInput = document.querySelector('.tm-search-input')
const albums = document.querySelectorAll('.tm-albums-container .tm-album-col')


function search(e) {
    const searchWord = e.target.value.toLowerCase()
    albums.forEach(album => {
        const albumName = album.querySelector('h2').innerText.toLowerCase()
        if (albumName.indexOf(searchWord) < 0) {
            album.style.display = 'none'
        } else {
            album.style.display = 'flex'
        }
    })
}
searchInput.addEventListener('input', search)

// Submit Email

const navList = document.querySelector('.navbar-nav')
const submitForm = document.querySelector('form')[1]
const emailInput = document.querySelector('.tm-subscribe-input')
const submitBtn = document.querySelector('.tm-subscribe-btn')
const login = document.createElement('li')

console.log(navList)

function loginPage(e) {
    e.preventDefault()
    const email = emailInput.value
    if (email.includes('@')) {
        login.innerText = `logged in as ${emailInput.value}`
        navList.appendChild(login)
        window.scrollTo(500, 0)
    } else { alert('please enter a valid email') }
}

submitBtn.addEventListener('click', loginPage)
