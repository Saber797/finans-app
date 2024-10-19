export function token(){
    let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    let res = ""
    for(let i=0;i<=10;i++){
        let rnd = Math.floor(Math.random() * symbols.length)
        res += symbols.charAt(rnd)
    }


    return res
}