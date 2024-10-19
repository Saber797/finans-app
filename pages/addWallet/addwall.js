import axios from "axios";
import { getData, postData } from "../../lids/api";
import { creatOption } from "../../component/option";




let userId = localStorage.getItem('userid')
let form = document.forms.add

axios("https://api.apilayer.com/currency_data/list",{
   method:"GET",
   headers:{
    apikey:"2suEkN721euv1iSC53sBq5g81LaDDgpv",
   }
})
.then((res) => creatOption(res.data.currencies,"currency") )



form.onsubmit = (e) => {
    e.preventDefault();
    let user = {};
    let fun = new FormData(form)
    fun.forEach((value, key) => {
        user[key] = value
    })
    postData("wallets", { ...user, userId: userId })
        .then(res => {
            window.location.href = "/pages/wallets/"
            
        })

}