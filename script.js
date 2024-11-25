const convertButton = document.querySelector(".convert-button") //mapeando o botao
const currencySelect = document.querySelector(".currency-select") //mapeando o select


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value //valor inserido no input
    const valueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const valueConverted = document.querySelector(".currency-value") //valor convertido

    const dolarToday = 5.80
    const euroToday = 6.06

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {  //valor inserido em real
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    if (currencySelect.value == "dolar") {  //resultado para dolar 
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"}).format(inputCurrencyValue / dolarToday)
    }


    if (currencySelect.value == "euro") {   //resultado para euro
        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"}).format(inputCurrencyValue / euroToday)
    }
}

function iconChange(){  //alteracao da bandeira da moeda
    const currencyName = document.getElementById("currency-name") //nome da moeda a ser convertida
    const currencyImage = document.querySelector("#dolar-icon") //icone da imagem a ser convertida

    if(currencySelect.value == "dolar"){ //quando selecionar dolar no select
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/dolar.png"}

    if(currencySelect.value == "euro"){ //quando selecionar euro no select
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"}
    convertValues()  //alterando a conversao conforme altera o select
}


currencySelect.addEventListener("change", iconChange) //evento alteracao do select
convertButton.addEventListener("click", convertValues) // evento de click no botao