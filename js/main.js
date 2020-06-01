
const mediaName = document.querySelectorAll('.media h5')
const mediaPrice = document.querySelectorAll('.media span')
const buttons = document.querySelectorAll('a.tm-buy')
const cart = document.querySelector('.cart-preview-passive')
const cartProduct = document.getElementById('cart_product')
const cartAmount = document.getElementById('cart_amount')
const cartImg = document.querySelectorAll('.nav-item')[3]





buttons.forEach((button, index) => {
    function clicked() {
        cartProduct.innerText = mediaName[index].textContent
        cartAmount.innerText = mediaPrice[index].textContent
    }
    button.addEventListener('click', clicked)
})

cartImg.addEventListener('click', () => cart.className === 'cart-preview-passive' ? cart.className = 'cart-preview-active' : cart.className = 'cart-preview-passive')
