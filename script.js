const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-selector")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const valueConverted = document.querySelector(".currency-value") //valor convertido

    const dolarToday = 5.2
    const euroToday = 6.2


    const convertedValue = inputCurrencyValue / dolarToday

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency", 
        currency: "BRL"
    }).format(inputCurrencyValue)

    valueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(convertedValue)

} 

convertButton.addEventListener("click",convertValues)