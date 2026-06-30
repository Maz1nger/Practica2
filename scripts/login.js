import { redirectProducts } from "./authGuard.js";

redirectProducts()

const userInpunt = document.getElementById('user')
const passwordInput = document.querySelector('#password')
const loginBtn = document.getElementById('login')

//"username":"johnd","password":"m38rmF$"

//Users disponibles
//https://fakestoreapi.com/users

loginBtn.addEventListener('click', () => {   
    
    
    fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        username: userInpunt.value,
        password: passwordInput.value,
        expiresInMins: 30
    })
    })
        .then(async (res) => {

             if (!res.ok) {
                const mensaje = await res.text();
                document.getElementById("wrongMessage").textContent = mensaje;
                return;
                }

            else{
                const data = await res.json();

                localStorage.setItem("token", data.token);
                document.getElementById("wrongMessage").textContent = "";

                redirectProducts();
                }

        });
})