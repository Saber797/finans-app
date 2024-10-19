import axios from "axios";
import { validate } from "../../lids/regexp";
import { getData } from "../../lids/api";


let form = document.forms.signin

form.onsubmit = (e) => {
   e.preventDefault();
   let fun = new FormData(form)
   let obj = {
      email: fun.get("email"),
      password: fun.get("password")
   }
   let inps = document.querySelectorAll(".sigin")
   let regex = {
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$.!%*?&]{8,}$/
   }
   let err = document.querySelector(".err")
   if (validate(inps,regex)) {
      getData(`users?email=${obj.email}`)
         .then(res => {
            if (!res.data.length) {
               alert('нет аккаунта')
               return;
            }
            if (res.data[0].password == obj.password) {
               localStorage.setItem("userid", res.data[0].id)
               localStorage.setItem("token", res.data[0].token)
               window.location.replace("/")
            } else {
               alert('пароль неверный')
            }
            
         })
   } else {
      err.innerHTML = "Неверный пароль или email"
   }

}





