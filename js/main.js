
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

const searchInput = document.querySelector('.tm-search-input')
const albums = document.querySelectorAll('.tm-albums-container .tm-album-col')


function search(e) {
    const searchWord = e.target.value
    albums.forEach(album => {
        const albumName = album.querySelector('h2').innerText
        if (albumName.indexOf(searchWord) < 0) {
            album.style.display = 'none'
        }
    })
}
searchInput.addEventListener('keypress', search)
