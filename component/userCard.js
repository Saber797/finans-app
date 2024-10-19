export function bankCard(item){
    let itemVisa = document.createElement('div')
    let visa = document.createElement("h4")
    let rub = document.createElement("span")

    itemVisa.classList.add('item-visa')
    
    visa.innerHTML = `${item.name}`
    rub.innerHTML = `${item.currency}`

    itemVisa.append(visa,rub)


    return itemVisa
}