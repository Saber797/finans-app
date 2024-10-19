import { header } from "../../component/header";
import { showUser } from "../../component/showUser";
import { bankCard } from "../../component/userCard";
import { getData } from "../../lids/api";
import { reload } from "../../lids/utils";

header()


let userId = localStorage.getItem("userid")
getData(`users/${userId}`)
.then(res => showUser(res.data))

let box = document.querySelector(".visa-grid")
getData(`wallets?userId=${userId}`)
.then(res => reload(res.data,bankCard,box))

let add = document.querySelector(".add")
add.onclick = () =>{
    window.location.href = "/pages/addWallet/"
}


