const convertButton = document.querySelector(".convert-button")

function convertValues(){
   const inputCurrencyValue = document.querySelector(".inputCurrency").value
  
    const dolarToday = 5.2

    const convertedValue = inputCurrencyValue / dolarToday
  
   console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues)