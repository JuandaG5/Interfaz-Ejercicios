let figurasJs = document.querySelector(".figuras");
let modal = document.getElementById("modal-area-triangulo");
let trianguloArea = document.getElementById("triangulo-area");
let circuloArea = document.getElementById("circulo-area");
let cuadradoArea = document.getElementById("cuadrado-area");
let rectanguloArea = document.getElementById("rectangulo-area");
let figurasTriangulo = document.querySelector(".figuras-triangulo");
let figurasCirculo = document.querySelector(".figuras-circulo");
let figurasCuadrado = document.querySelector(".figuras-cuadrado");
let figurasRectangulo = document.querySelector(".figuras-rectangulo");

trianguloArea.addEventListener("click", () => {
  modal.showModal();
});

circuloArea.addEventListener("click", () => {
  modal.showModal();
});

cuadradoArea.addEventListener("click", () => {
  modal.showModal();
});

rectanguloArea.addEventListener("click", () => {
  modal.showModal();
});

figurasTriangulo.addEventListener("click", () => {});
