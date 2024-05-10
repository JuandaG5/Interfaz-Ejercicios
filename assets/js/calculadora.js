let calculadoraJs = document.querySelector(".calculadora");
let calculadoraSelect = document.getElementById("calculadora");
let calculadoraSelect2 = document.getElementById("calculadora2");
let inputConvert = document.getElementById("input-convert");
let buttonConvert = document.getElementById("button-convert");
let parrafoResultado = document.createElement("p");
parrafoResultado.className = "long";

buttonConvert.addEventListener("click", () => {
  let convertFrom = calculadoraSelect.value;
  let convertTo = calculadoraSelect2.value;
  let grados = inputConvert.value;
  if (convertFrom == convertTo || grados == "") {
    parrafoResultado.textContent = "No es posible realizar esta acción";
  } else if (convertFrom == "Farenheit" && convertTo == "Celsius") {
    let resultado = (grados - 32) * (5 / 9);
    parrafoResultado.textContent = `Al convertir ${grados}° Farenheit a grados Celsius el resultado es ${resultado}`;
  } else if (convertFrom == "Farenheit" && convertTo == "Kelvin") {
    let resultado = (grados - 32) * (5 / 9) + 273.15;
    parrafoResultado.textContent = `Al convertir ${grados}° Farenheit a grados Celsius el resultado es ${resultado}`;
  } else if (convertFrom == "Kelvin" && convertTo == "Farenheit") {
    let resultado = (grados - 273.15) * (9 / 5) + 32;
    parrafoResultado.textContent = `Al convertir ${grados}° Farenheit a grados Celsius el resultado es ${resultado}`;
  } else if (convertFrom == "Kelvin" && convertTo == "Celsius") {
    let resultado = grados - 273.15;
    parrafoResultado.textContent = `Al convertir ${grados}° Farenheit a grados Celsius el resultado es ${resultado}`;
  } else if (convertFrom == "Celsius" && convertTo == "Farenheit") {
    let resultado = grados * (9 / 5) + 32;
    parrafoResultado.textContent = `Al convertir ${grados}° Farenheit a grados Celsius el resultado es ${resultado}`;
  } else if (convertFrom == "Celsius" && convertTo == "Kelvin") {
    let resultado = grados + 273.15;
    parrafoResultado.textContent = `Al convertir ${grados}° Farenheit a grados Celsius el resultado es ${resultado}`;
  }
  calculadoraJs.append(parrafoResultado);
});
