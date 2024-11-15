var estado = 0;

function cambiarSemaforo(idElemento) {
    const colores = ["red", "yellow", "green"];
    document.getElementById(idElemento).style.backgroundColor = colores[estado];
    estado = (estado + 1) % 2;
}