let array = [];
const nycklar = "items"
const produktName = document.querySelector(".namn")
const produktPrice = document.querySelector(".pris")
const main = document.querySelector("main")
function sendToCart(){
    if(window.location.href = "index.html"){
        window.location.assign("utcheckning.html")
    }
}
function sendToMain(){
    if(window.location.href = "utcheckning.html"){
        window.location.assign("index.html")
    }
}

function sendTo404(){
    window.location.assign("error.html")
}

function sendBack(){
    window.location.assign("index.html")
}

function add_shit(){

    let produkt ={
        namn:produktName.value,
        pris:produktPrice.value
    }
    array.push(produkt)
    let json = JSON.stringify(array)
    window.localStorage.setItem(nycklar, json)
    console.log(localStorage)
};
function load_from_ls(){
    let json = window.localStorage.getItem(nycklar)

    if (json != null){
        array = JSON.parse(json)
    }

    for (let index = 0; index < array.length; index++)
    {
        const element = array[index]
        let h2 =  document.createElement("h2")
        h2.textContent = element.namn
        let h3pris = document.createElement("h3")
        h3pris.textContent = element.pris
        let div = document.createElement("div")
        main.append(div)
        div.append(h2)
        div.append(h3pris)
    }

}