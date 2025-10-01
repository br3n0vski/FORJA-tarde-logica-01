function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber

    var resultado = document.getElementById("respSoma")     
    resultado.innerHTML = "O resultado da soma é: " + (numero1 + numero2)   
    // console.log(numero1, numero2) 
}
     
    function sub(){
        var numero1 = document.getElementById("sub1").valueAsNumber
        var numero2 = document.getElementById("sub2").valueAsNumber
        var resultado = document.getElementById("respSub")
        resultado.innerHTML = "O resultado da subtração é: " + (numero1 - numero2)  
}