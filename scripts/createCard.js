export function createCard(product){

    const card= document.createElement('div')

    // Contenido del card
    const img = document.createElement('img')
    img.src = product.image

    const productName = document.createElement('a')
    productName.textContent=product.title
    productName.href = "/Practica2/pages/product.html?id=" + product.id
    

    //agregando todos los hijos al card
    card.appendChild(img)
    card.appendChild(productName)

     document.getElementById('productGrid').appendChild(card)
}
