const slides = document.querySelectorAll('.slide');
const indicadores = document.querySelectorAll('.indicador');
const btnAnterior = document.getElementById('btn_anterior');
const btnProximo = document.getElementById('btn_proximo');

let slideAtual = 0

function slideProximo(x) {
    mostrarSlide(slideAtual += x)
}

function slideAnterior(y) {
    mostrarSlide(slideAtual += y)
}

function mostrarSlide(index) {
    if (slides.length === 0) {
        return
    }
    if (index < 0) {
        index = slides.length - 1;
    }
    if (index >= slides.length) {
        index = 0;
    }

    slideAtual = index;

     for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        indicadores.forEach(ind => ind.classList.remove("ativo"));
    }

    slides[slideAtual].style.display = "block"
    indicadores[slideAtual].classList.add("ativo");


}

if (slides.length > 0) {
    mostrarSlide(slideAtual);
}




