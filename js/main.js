
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

// console.log(navList)

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


//music api

fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=814047ce29de55128c8d3f7f22774329&format=json")
    .then(response => {
        return response.json()
    })
    .then(data => console.log(data.similarartists))

// Application name	goodProject
// API key	814047ce29de55128c8d3f7f22774329
// Shared secret	d429059cb35c94e75cb56a9bd60b5f90
// Registered to	orhanb


function fetchAlbum() {
    let albums = [...document.querySelectorAll(".tm-album-col")]
    fetch("http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=814047ce29de55128c8d3f7f22774329&format=json")
        .then(response => {
            return response.json()
        })
        .then(data => {
            albums.map((album, index) => {
                let img = album.querySelector("img")
                let name = album.querySelector("h2")
                let singerName = album.querySelector("p")
                img.src = data.albums.album[index].image[3]["#text"]
                name.innerText = data.albums.album[index].name
                singerName.innerText = data.albums.album[index].artist.name
            })
        })

}


window.onload = fetchAlbum;