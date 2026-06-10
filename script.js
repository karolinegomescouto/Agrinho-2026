const botao = document.getElementById("btnSaibaMais");
const texto = document.getElementById("extraTexto");

botao.addEventListener("click", () => {
    if(texto.style.maxHeight && texto.style.maxHeight !== "0px"){
        texto.style.maxHeight = "0px";
        botao.textContent = "Saiba Mais";
    } else {
        texto.style.maxHeight = texto.scrollHeight + "px";
        botao.textContent = "Mostrar Menos";
    }
});