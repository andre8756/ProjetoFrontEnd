function criarBotoes(){
    var container = document.querySelector('div')
    
    var b1 = document.createElement("button")
    b1.innerHTML = "Mostrar"
    b1.addEventListener('click',()=>{
        var img = document.createElement("img")
        img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/5/5c/Pair_of_white_domesticated_ducks.jpg")
        container.appendChild(img)
    })

    var b2 = document.createElement("button")
    b2.innerHTML = "Esconder"
    b2.addEventListener('click', ()=>{
        document.querySelector('img').remove()
    })

    container.appendChild(b1)

    container.appendChild(b2)

}