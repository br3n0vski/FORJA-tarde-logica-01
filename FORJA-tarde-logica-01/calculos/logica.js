function soma() {
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resultado = document.getElementById("respSoma")
    resultado.innerHTML = (numero1 + numero2)
    // console.log(numero1, numero2) 
}
function sub() {
    var numero1 = document.getElementById("sub1").valueAsNumber
    var numero2 = document.getElementById("sub2").valueAsNumber
    var resultado = document.getElementById("respSub")
    resultado.innerHTML = (numero1 - numero2)
}

function mult() {
    var numero1 = document.getElementById("mult1").valueAsNumber
    var numero2 = document.getElementById("mult2").valueAsNumber
    var resultado = document.getElementById("respMult")
    resultado.innerHTML = + (numero1 * numero2)
}
function divs() {
    var numero1 = document.getElementById("divs").valueAsNumber
    var numero2 = document.getElementById("divs").valueAsNumber
    var resultado = document.getElementById("respdivs")
    resultado.innerHTML = "O resultado da divisão é: " + (numero1 / numero2)
}
function divs() {
    var a = document.getElementById("divs1").valueAsNumber
    var b = document.getElementById("divs2").valueAsNumber
    var Response = document.getElementById("respdivs")

    if (b !== 0) {
        Response.innerHTML = (a / b).toFixed(2)
    }
    else {
        Response.innerHTML = "não se divide por zero"
    }
}
