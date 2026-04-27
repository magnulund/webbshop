let array = [];
const nycklar = "items"
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







function add_shit(name, price, imgSrc){
    let produkt ={
        namn: name,
        pris: price,
        bild: imgSrc
    }
    array.push(produkt)
    let json = JSON.stringify(array)
    window.localStorage.setItem(nycklar, json)
    console.log(localStorage)
}
function displayCart(){
    let json = window.localStorage.getItem(nycklar)

    if (json != null){
        array = JSON.parse(json)
    }

    let container;
    if (window.location.href.includes("index.html")) {
        container = document.querySelector("#cart");
    } 
    else {
        container = main;
    }

    container.innerHTML = '<h2>Your Cart</h2>';

    for (let index = 0; index < array.length; index++){
        const element = array[index]
        let img = document.createElement("img")
        img.src = element.bild
        img.style.width = "100px"
        let h2 =  document.createElement("h2")
        h2.textContent = element.namn
        let h3pris = document.createElement("h3")
        h3pris.textContent = element.pris
        let removeBtn = document.createElement("button")
        removeBtn.textContent = "Remove"
        removeBtn.onclick = function() { removeItem(index) }
        let div = document.createElement("div")
        container.append(div)
        div.append(img)
        div.append(h2)
        div.append(h3pris)
        div.append(removeBtn)
    }
    

}
function removeItem(index){
    array.splice(index, 1)
    let json = JSON.stringify(array)
    window.localStorage.setItem(nycklar, json)
    displayCart()
}