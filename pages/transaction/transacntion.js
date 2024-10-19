import { header } from "../../component/header";
import { showUser } from "../../component/showUser";
import { transaction } from "../../component/transaction";
import { getData } from "../../lids/api";
import { reload } from "../../lids/utils";

header()


let userId = localStorage.getItem("userid")
let table = document.querySelector("tbody")
getData(`transactions?userId=${userId}`)
.then(res =>{
    reload(res.data, transaction, table)}
)


getData(`users/${userId}`)
.then(res => showUser(res.data))
let add = document.querySelector(".add")
add.onclick = () =>{
    window.location.href = "/pages/addTransaction/"
}