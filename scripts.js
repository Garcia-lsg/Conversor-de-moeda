const convertButton = document.querySelector(".convert-button");
const moedaSelecionada = document.querySelector(".moeda-selecionada");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".inputCurrency").value;

  const valorMoedaConverter = document.querySelector(".moeda-a-converter"); // Valor em Real
  const valorMoedaConvertida = document.querySelector(".moeda-convertida"); // Outras moedas

  const dolarToday = 4.87;
  const euroToday = 5.28;

  // Tratando a moeda desejada pelo usuário - Dólar
  if (moedaSelecionada.value == "dolar") {
    valorMoedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  // Tratando a moeda desejada pelo usuário -  Euro
  if (moedaSelecionada.value == "euro") {
    valorMoedaConvertida.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  //Formatando moeda a converter
  valorMoedaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

//Alterando as moedas/bandeiras convertidas
function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".logoMoeda");

  if (moedaSelecionada.value === "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/dolar.png";
  }

  if (moedaSelecionada.value === "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }

  convertValues();
}

moedaSelecionada.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
