function escreva(){
    var nome = document.getElementById("nome").value
    var idade = parseFloat(document.getElementById("idade").value)


    console.log(typeof nome, typeof idade)
    console.log(nome, idade)
    var printNOME = document.getElementById("printNOME")
    var printIDADE = document.getElementById("printIDADE")
    printNOME.innerHTML = `Seu nome é ${nome}`
    printNOME.style.color = "green"
    printIDADE.innerHTML = `Sua idade é ${idade} anos`
    printIDADE.style.color = "red"

}