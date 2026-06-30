import { logout,redirectLogin } from "./authGuard.js"

redirectLogin()

const logoutBtn = document.getElementById('logout')
logoutBtn.addEventListener('click', logout)

const params = new URLSearchParams(location.search)

const id = params.get('id')

const llenarDato= (id, content)=>{
    document.getElementById(id).textContent = content
}

fetch('https://fakestoreapi.com/products/' + id)
.then(res => res.json())
.then(data => {
    document.getElementById('productImage').src =data.image

    llenarDato('productName',data.title)
    llenarDato('description',data.description)
    llenarDato('category',data.category)
    llenarDato('rating', `⭐ ${data.rating.rate} (${data.rating.count} reseñas)`)
    llenarDato('price',data.price)
    

});