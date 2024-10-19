export function showUser(item){
    let showEmail = document.querySelector(".email")
    let userName = document.querySelector(".name-user")
    let email = document.querySelector(".dss")

    showEmail.innerHTML = item.email
    email.innerHTML = item.email
    userName.innerHTML = `${item.name} ${item.surname}`
}