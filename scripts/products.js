//fetch('https://fakestoreapi.com/products')
  //.then(response => response.json())
  //.then(data => console.log(data));


import { logout, redirectLogin } from './authGuard.js';
import { createCard } from './createCard.js'

redirectLogin()


const logoutBtn = document.getElementById('logout')
logoutBtn.addEventListener('click', logout)

async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    
    return data
}


const render = async () => {
    const products = await getProducts()
    
    products.forEach((p) => {
        createCard(p)
    });


}

render()
