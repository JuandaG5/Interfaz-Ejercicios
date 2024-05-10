let trianguloJs = document.querySelector(".triangulo");
let buttonDetermine = document.getElementById("determinar");
let parrafoDeterminar = document.createElement("p");

buttonDetermine.addEventListener("click", () => {
  let lados = document.getElementById("lados").value;
  let lados2 = document.getElementById("lados2").value;
  let lados3 = document.getElementById("lados3").value;
  if (lados == lados2 && lados == lados3) {
    console.log(lados, lados2, lados3);
    parrafoDeterminar.textContent = "Este es un triángulo equilatero";
  } else if (
    (lados == lados2 && lados != lados3) ||
    (lados != lados2 && lados == lados3) ||
    (lados2 == lados3 && lados != lados3) 
  ) {
    parrafoDeterminar.textContent = "Este es un triángulo isósceles";
  } else if (lados != lados2 && lados != lados3 && lados2 != lados3) {
    parrafoDeterminar.textContent = "Este es un triángulo escaleno";
  }
  trianguloJs.append(parrafoDeterminar);
});

