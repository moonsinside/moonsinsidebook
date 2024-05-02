var nav = document.querySelector("#nav");
var abrir = document.querySelector("#abrir");
var cerrar = document.querySelector("#cerrar"); 

abrir.addEventListener("click", function() {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", function() {
    nav.classList.remove("visible");
});
