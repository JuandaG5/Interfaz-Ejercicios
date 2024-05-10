let containerPalabras = document.querySelector(".palabras");
let parrafo = document.createElement("p");
parrafo.className = "long";
containerPalabras.append(parrafo);

// ----------------------------------------------------------------
//Opciones
let long = document.querySelector("#long");
let upper = document.querySelector("#upper");
let lower = document.querySelector("#lower");
let first = document.querySelector("#first");

//Longitud
long.addEventListener("click", () => {
  let string = document.getElementById("string").value;
  if (string.trim() == "") {
    parrafo.textContent = "No hay palabra";
    return;
  }
  parrafo.textContent = `La longitud de la palabra es de ${string.length} caracteres de largo`;
});

//Conversión a mayúsculas
upper.addEventListener("click", () => {
  let string = document.getElementById("string").value;
  if (string.trim() == "") {
    parrafo.textContent = "No hay palabra";
    return;
  }
  parrafo.textContent = `La palabra en mayúsculas es "${string.toUpperCase()}"`;
});

//Conversión a minúsculas
lower.addEventListener("click", () => {
  let string = document.getElementById("string").value;
  if (string.trim() == "") {
    parrafo.textContent = "No hay palabra";
    return;
  }
  parrafo.textContent = `La palabra en minúsculas es "${string.toLowerCase()}"`;
});

//Imprimir primer carácter
first.addEventListener("click", () => {
  let string = document.getElementById("string").value;
  if (string.trim() == "") {
    parrafo.textContent = "No hay palabra";
    return;
  }
  parrafo.textContent = `El primer cáracter de la palabra es "${string.charAt(
    0
  )}"`;
});
