import axios from "axios";
import { comback } from "./lids/comback";
import { header } from "./component/header";
import { showUser } from "./component/showUser";
import { bankCard } from "./component/userCard";
import { reload } from "./lids/utils";
import { transaction } from "./component/transaction";
import { getData } from "./lids/api";
header()

let token = localStorage.getItem("token")
if (!token) {
    window.location.replace('/pages/signup/')
}


let userId = localStorage.getItem("userid")
getData(`users/${userId}`)
    .then(res => showUser(res.data))


let box = document.querySelector(".visa-grid")
axios.get(`http://localhost:3001/wallets?userId=${userId}`)
    .then(res => {
        reload(res.data, bankCard, box)
        
    })


    
axios.get(`http://localhost:3001/transactions?userId=${userId}`)
    .then(res => {
        console.log(res.data);

        let table = document.querySelector("tbody")
        reload(res.data, transaction, table)
    })



