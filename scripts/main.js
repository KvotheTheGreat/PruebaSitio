let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "img/img-perfil.jpg") {
    miImage.setAttribute("src", "img/github.png");
  } else {
    miImage.setAttribute("src", "img/img-perfil.jpg");
  }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
  let miNombre = prompt("Por favor, ingresa tu nombre.");
  localStorage.setItem("nombre", miNombre);
  miTitulo.textContent = "John es genial, " + miNombre;
}

if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "John es genial, " + nombreAlmacenado;
}

miBoton.onclick = function () {
  estableceNombreUsuario();
};

function estableceNombreUsuario() {
  let miNombre = prompt("Introduzca su nombre.");
  if (!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem("nombre", miNombre);
    miTitulo.innerHTML = "John es genial, " + miNombre;
  }
}
