var mensajeIngresado = document.querySelector("#mensaje");
var resultadoFinal = document.querySelector("#resultado");
var btnEncriptado = document.querySelector("#Encriptar");
var btnDesencriptar = document.querySelector("#Desencriptar");
var btnCopiar = document.querySelector("#copiar");
var imagen = document.querySelector(".imagen");
var parrafo = document.querySelector(".ningun");
var texto1 = document.querySelector(".texto2");
var btnLimpiar = document.querySelector("#limpiar");
ocultar2();
function Encriptar() {
  ocultar();
  mostrar2();
  var Texto = mensajeIngresado.value.toLowerCase();
  var textoEncriptado = Texto.replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")
    .replaceAll(" ", "Þ");
  resultadoFinal.value = textoEncriptado;
}
function Desencriptar() {
  var textoEncriptado = mensajeIngresado.value;
  var texto = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")
    .replaceAll("Þ", " ");
  resultadoFinal.value = texto;
}
function Copiar() {
  var textoEncriptado = resultadoFinal.value;
  navigator.clipboard.writeText(textoEncriptado);
  mensajeIngresado.value = "";
  mensajeIngresado.focus();
  navigator.clipboard
    .readText()
    .then((texto) => {
      mensajeIngresado.value = texto;
    })
    .catch((error) => {
      alert("Hubo un error: ", error);
    });
}
function ocultar() {
  document.getElementById("imagen").style.visibility = "hidden";
  document.getElementById("ningun").style.visibility = "hidden";
  document.getElementById("texto2").style.visibility = "hidden";
}
function ocultar2() {
  document.getElementById("mostrar").style.visibility = "hidden";
}
function mostrar2() {
  document.getElementById("mostrar").style.visibility = "visible";
}
function mostrar() {
  document.getElementById("imagen").style.visibility = "visible";
  document.getElementById("ningun").style.visibility = "visible";
  document.getElementById("texto2").style.visibility = "visible";
}
function limpiar(){
  document.getElementById("mensaje").value = "";
  mensajeIngresado.focus();
  ocultar2();
  mostrar();
}

btnEncriptado.onclick = Encriptar;
btnDesencriptar.onclick = Desencriptar;
btnCopiar.onclick = Copiar;
btnLimpiar.onclick = limpiar;
