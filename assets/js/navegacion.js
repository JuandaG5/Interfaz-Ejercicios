let figuras = document.getElementById("link-figuras");
let palabras = document.getElementById("link-palabras");
let docentes = document.getElementById("link-docentes");
let triangulo = document.getElementById("link-triangulo");
let calculadora = document.getElementById("link-calculadora");

let divPalabras = document.querySelector(".palabras");
let divCalculadora = document.querySelector(".calculadora");
let divTriangulo = document.querySelector(".triangulo");
let divFiguras = document.querySelector(".figuras");

palabras.addEventListener("click", () => {
  divPalabras.style.display = "block";

  divCalculadora.style.display = "none";
  divTriangulo.style.display = "none";
  divFiguras.style.display = "none";
});

calculadora.addEventListener("click", () => {
  divCalculadora.style.display = "flex";

  divPalabras.style.display = "none";
  divTriangulo.style.display = "none";
  divFiguras.style.display = "none";
});

triangulo.addEventListener("click", () => {
  divTriangulo.style.display = "flex";

  divPalabras.style.display = "none";
  divCalculadora.style.display = "none";
  divFiguras.style.display = "none";
});

figuras.addEventListener("click", () => {
  divFiguras.style.display = "grid";

  divPalabras.style.display = "none";
  divCalculadora.style.display = "none";
  divTriangulo.style.display = "none";
});
