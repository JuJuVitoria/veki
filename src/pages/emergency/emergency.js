import { emergencias } from "../../js/data/emergenciasData.js";
import { criarCard } from "./js/cardsEmergency.js";

import { aplicarForm } from "../../js/shared/filter.js";

// Para criar os cards de emergências
const container = document.querySelector('.cards-emergencias-container');
emergencias.forEach((emergencia) => {
    const card = criarCard(emergencia);
    container.appendChild(card);
});

// Para aplicar o filtro nos cards de emergência
const form = document.getElementById('formFiltro');
form.addEventListener('submit', aplicarForm);

const btnVerPedido = document.getElementsByClassName('btnVerPedido');
console.log(btnVerPedido.id);