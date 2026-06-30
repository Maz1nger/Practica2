import { logout, redirectLogin } from "./authGuard.js"
import { createCard } from './createCard.js'

redirectLogin()

const logoutBtn = document.getElementById('logout')
logoutBtn.addEventListener('click', logout)

const params = new URLSearchParams(location.search)
const cat = params.get('cat')

fetch('https://fakestoreapi.com/products/category/' + cat)
.then(res => res.json())
.then(data => {
    data.forEach((p) => {
        createCard(p)
    })
})