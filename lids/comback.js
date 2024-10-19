export function comback(){
    let token = localStorage.getItem("token")
    if(!token){
        window.location.replace("/pages/signup/")
    }
}