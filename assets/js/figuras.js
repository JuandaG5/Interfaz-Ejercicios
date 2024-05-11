let figurasJs = document.querySelector(".figuras");
let modalAreaTriangulo = document.getElementById("modal-area-triangulo");
let modalAreaCirculo = document.getElementById("modal-area-circulo");
let modalAreaRectangulo = document.getElementById("modal-area-rectangulo");
let modalAreaCuadrado = document.getElementById("modal-area-cuadrado");
let modalPerimetroTriangulo = document.getElementById(
  "modal-perimetro-triangulo"
);
let trianguloArea = document.getElementById("triangulo-area");
let circuloArea = document.getElementById("circulo-area");
let cuadradoArea = document.getElementById("cuadrado-area");
let rectanguloArea = document.getElementById("rectangulo-area");
let rectanguloPerimetro = document.getElementById("rectangulo-perimetro");
let trianguloPerimetro = document.getElementById("triangulo-perimetro");
let circuloPerimetro = document.getElementById("circulo-perimetro");
let cuadradoPerimetro = document.getElementById("cuadrado-perimetro");
let figurasTriangulo = document.querySelector(".figuras-triangulo");
let figurasCirculo = document.querySelector(".figuras-circulo");
let figurasCuadrado = document.querySelector(".figuras-cuadrado");
let figurasRectangulo = document.querySelector(".figuras-rectangulo");

let trianguloAreaParrafo = document.createElement("p");
trianguloAreaParrafo.className = "long";

let trianguloPerimetroParrafo = document.createElement("p");
trianguloPerimetroParrafo.className = "long";
let circuloParrafo = document.createElement("p");
circuloParrafo.className = "long";

let cuadradoParrafo = document.createElement("p");
cuadradoParrafo.className = "long";

let rectanguloAreaParrafo = document.createElement("p");
rectanguloAreaParrafo.className = "long";


modalAreaTriangulo.append(trianguloAreaParrafo);
modalPerimetroTriangulo.append(trianguloPerimetroParrafo);
modalAreaCirculo.append(circuloParrafo);
modalAreaCuadrado.append(cuadradoParrafo);
modalAreaRectangulo.append(rectanguloAreaParrafo);


let buttonsCalcular = document.querySelectorAll(".calcular");

let figura = "";
let operacion = "";

buttonsCalcular.forEach((button) => {
  button.addEventListener("click", () => {
    if (figura == "Triangulo") {
      if (operacion == "Area") {
        let inputBase = document.getElementById("triangulo-input-base").value;
        let inputAltura = document.getElementById(
          "triangulo-input-altura"
        ).value;
        let area = (inputBase * inputAltura) / 2;
        trianguloAreaParrafo.textContent = `El área es ${area.toFixed(2)}`;
      }
      if (operacion == "Perimetro") {
        let lado1 = parseInt(document.getElementById("lado1").value);
        let lado2 = parseInt(document.getElementById("lado2").value);
        let lado3 = parseInt(document.getElementById("lado3").value);

        let perimetro = lado1 + lado2 + lado3;
        trianguloPerimetroParrafo.textContent = `El perimetro es ${perimetro.toFixed(
          2
        )}`;
      }
    } else if (figura == "Circulo") {
      let inputRadio = document.getElementById("circulo-input-radio").value;
      if (operacion == "Area") {
        let area = Math.PI * inputRadio ** 2;
        circuloParrafo.textContent = `El área es ${area.toFixed(2)}`;
      }
      if (operacion == "Perimetro") {
        let perimetro = 2 * Math.PI * inputRadio;
        circuloParrafo.textContent = `El perimetro es ${perimetro.toFixed(2)}`;
      }
    } else if (figura == "Cuadrado") {
      let inputLado = document.getElementById("cuadrado-input-lado").value;
      if (operacion == "Area") {
        let area = inputLado ** 2;
        cuadradoParrafo.textContent = `El área es ${area.toFixed(2)}`;
      }
      if (operacion == "Perimetro") {
        let perimetro = inputBase * inputAltura;
        cuadradoParrafo.textContent = `El perimetro es ${perimetro.toFixed(2)}`;
      }
    } else if (figura == "Rectangulo") {
      if (operacion == "Area") {
        let inputlargo = document.getElementById("input-rectangulo-largo").value;
        let inputAncho = document.getElementById("input-rectangulo-ancho").value;
        let area = inputlargo * inputAncho;
        rectanguloAreaParrafo.textContent = `El area es ${area.toFixed(2)}`;
      }
      if (operacion == "Perimetro") {
        let inputlargo = parseInt(document.getElementById("input-rectangulo-largo").value);
        let inputAncho = parseInt(document.getElementById("input-rectangulo-ancho").value);
        let perimetro = (2 * inputlargo) + (2 * inputAncho);
        rectanguloAreaParrafo.textContent = `El area es ${perimetro.toFixed(2)}`;
      }
    }
  });
});

function mostrarModal(modal) {
  modal.showModal();
}

trianguloArea.addEventListener("click", () => {
  figura = "Triangulo";
  operacion = "Area";
  modalAreaTriangulo.showModal();
});

trianguloPerimetro.addEventListener("click", () => {
  figura = "Triangulo";
  operacion = "Perimetro";
  mostrarModal(modalPerimetroTriangulo);
});

circuloArea.addEventListener("click", () => {
  figura = "Circulo";
  operacion = "Area";
  mostrarModal(modalAreaCirculo);
});

circuloPerimetro.addEventListener("click", () => {
  figura = "Circulo";
  operacion = "Perimetro";
  mostrarModal(modalAreaCirculo);
});
cuadradoArea.addEventListener("click", () => {
  figura = "Cuadrado";
  operacion = "Area";
  mostrarModal(modalAreaCuadrado);
});

cuadradoPerimetro.addEventListener("click", () => {
  figura = "Cuadrado";
  operacion = "Perimetro";
  mostrarModal(modalAreaCuadrado);
});
rectanguloArea.addEventListener("click", () => {
  figura = "Rectangulo";
  operacion = "Area";
  mostrarModal(modalAreaRectangulo);
});
rectanguloPerimetro.addEventListener("click", () => {
  figura = "Rectangulo";
  operacion = "Perimetro";
  mostrarModal(modalAreaRectangulo);
});
