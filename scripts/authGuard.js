export const redirectLogin = () => {
     if(!localStorage.getItem('token')){
        location.href='./Practica2/pages/login.html'
    }
}

export const redirectProducts = () => {
    if(localStorage.getItem('token')){
        location.href='../index.html'
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    location.href='./Practica2/pages/login.html'
}

