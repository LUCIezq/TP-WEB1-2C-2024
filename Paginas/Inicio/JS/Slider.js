let imagenesSlider = [
                    "./Paginas/Inicio/Assets_cursos_slide/FOTO-CURSO1.jpg",
                    "./Paginas/Inicio/Assets_cursos_slide/FOTO-CURSO2.jpg",
                    "./Paginas/Inicio/Assets_cursos_slide/FOTO-CURSO3.jpg"
                    ];

document.imagen__slider.src = imagenesSlider[0];

let sliderDerecho = document.querySelector(".carrousel-right");
let sliderIzquierdo = document.querySelector(".carrousel-left");
let contador = 0;

function moverDerecha() {
    contador++;
    if(contador > imagenesSlider.length - 1) {
        contador = 0;
    }
    document.imagen__slider.src = imagenesSlider[contador];
}
let intervalo = setInterval(moverDerecha, 3000);
sliderDerecho.addEventListener("click", function(){
    clearInterval(intervalo);
    moverDerecha();
    intervalo = setInterval(moverDerecha, 3000);
});

function moverIzquierda() {
    contador--;
    if(contador < 0) {
        contador = imagenesSlider.length - 1;
    }
    document.imagen__slider.src = imagenesSlider[contador];

}
sliderIzquierdo.addEventListener("click", function(){
    clearInterval(intervalo);
    moverIzquierda();
    intervalo = setInterval(moverDerecha, 3000);
});
