function escreva(){
    var nome = document.getElementById("nome").value
    var tipo = document.getElementById("tipo").value
    var idade = parseFloat(document.getElementById("idade").value)
    var raca = document.getElementById("raca").value
    var nac = document.getElementById("nac").value

    var printNOME = document.getElementById("printNOME")
    var printTIPO = document.getElementById("printTIPO")
    var printIDADE = document.getElementById("printIDADE")
    var printRACA = document.getElementById("printRACA")
    var printNAC = document.getElementById("printNAC")

    printNome.textContent = `O nome do seu pet é ${nome}`
    printTipo.textContent = `O tipo do seu pet é ${tipo}`
    printIdade.textContent = `A idade do seu pet é ${idade} anos`
    printRaca.textContent = `A raça do seu pet é ${raca}`
    printNac.textContent = `O local de nascimento do seu pet é ${nac}`

}