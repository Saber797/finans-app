export function header(){
   let header = document.querySelector('header')
   header.innerHTML = ` <div class="container">
        <div class="ds-flx">
          <div class="left-side">
            <a href="/" class="ssd">Главная</a>
            <a href="/pages/wallets/" class="ssd">Мои кошельки</a>
            <a href="/pages/transaction/" class="ssd">Мои транзакции</a>
          </div>
          <div class="right-side">
            <a href="" class="dss">alexadams@google.com</a>
            <button class="right-btn">выход</button>
          </div>
        </div>
      </div>`

      let exit = document.querySelector(".right-btn")
      exit.onclick = () =>{
        localStorage.clear()
        window.location.replace("/pages/signin/")
      }
      
}