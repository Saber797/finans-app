export function creatOption (data,selectId){
    let select = document.querySelector(`#${selectId}`)
    if(Array.isArray(data)){
        for(let elem of data){
            let option = document.createElement("option")
    
            option.textContent = elem.name
            option.value = elem.name
    
            select.append(option)
        } 
        
    }else{
        for(let key in obj){
            let option = document.createElement("option")
    
            option.textContent = key
            option.value = key.toLowerCase()
    
            select.append(option)
        }
    }
}