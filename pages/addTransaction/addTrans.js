import axios from "axios";
import { getData, postData } from "../../lids/api";
import { creatOption } from "../../component/option";

let userId = localStorage.getItem('userid')
getData(`wallets?userId=${userId}`)
    .then(res => creatOption(res.data, "currency"))

let form = document.forms.trans
form.onsubmit = (e) => {
    e.preventDefault();
    let user = {};
    let fun = new FormData(form)
    fun.forEach((value, key) => {
        user[key] = value
    })
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDay()

    postData("transactions", { ...user, userId: userId,
        createAt:`${year}-${month}-${day}`
     })
        .then(res => {
            console.log('sybmitted');
            // localStorage.setItem( res.data.id)
            window.location.href = "/pages/transaction/"
        })

}