const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const valueConverted = document.querySelector(".currency-value") //valor convertido

    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 6.2

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{  //valor inserido em real
        style: "currency", 
        currency: "BRL"
        }).format(inputCurrencyValue)

    if (currencySelect.value== "dolar"){  //resultado para dolar 
    valueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
        }).format(inputCurrencyValue / dolarToday)}
        

    if (currencySelect.value == "euro"){   //resultado para euro
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)}
} 




convertButton.addEventListener("click",convertValues)