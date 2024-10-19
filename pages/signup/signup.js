import axios from "axios";
import { token } from "../../lids/generateToken";
import { validate } from "../../lids/regexp";
import { getData, postData } from "../../lids/api";



let form = document.forms.auth
form.onsubmit = (e) => {
    e.preventDefault();

    let user = {};
    let fun = new FormData(form)
    fun.forEach((value, key) => {
        user[key] = value
    })
    let inputs = document.querySelectorAll(".sigup")
    let regexp = {
        name: /^[A-Za-zА-Яа-яЁё\s'.-]+$/,
        surname: /^[A-Za-zА-Яа-яЁё\s'.-]+$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$.!%*?&]{8,}$/
    }
    let err = document.querySelector(".err")
    if (validate(inputs, regexp)) {
        getData(`users?email=${user.email}`)
            .then(res => {
                if (!res.data.length) {
                    postData("users",{ ...user, token: token() })
                        .then(res => {
                            window.location.replace("/")
                            localStorage.setItem("userid", res.data.id)
                            localStorage.setItem("token", res.data.token)
                        }
                        )

                }else{
                    // alert("уже зареган")
                    window.location.replace("/pages/signin/")
                }
            })
    } else {
        err.innerHTML = "Неверный пароль или email"
    }


}

