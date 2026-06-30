export const redirectLogin = () => {
     if(!localStorage.getItem('token')){
        location.href='../pages/login.html'
    }
}

export const redirectProducts = () => {
    if(localStorage.getItem('token')){
        location.href='../index.html'
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    location.href='../pages/login.html'
}

