import { emergencias } from "../../js/data/emergenciasData.js";
import { svgIcons } from '../../js/shared/svgIcons.js';

import { aplicarForm } from "../../js/shared/filter.js";

function criarCard(emergencia) {
    const card = document.createElement('div');
    card.classList.add('card-emergencia');
    card.dataset.pais = emergencia.pais;
    card.dataset.categoria = emergencia.categoria;
    card.dataset.relevancia = emergencia.relevancia;

    // Categoria e Relevância
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('card-info');

    const categoriaDiv = document.createElement('div');
    categoriaDiv.classList.add('card-info__categoria');
    const textCategoria = document.createElement('p');
    textCategoria.classList.add('card-info__p')
    textCategoria.innerText = emergencia.categoria;
    categoriaDiv.appendChild(textCategoria);

    const relevanciaDiv = document.createElement('div');
    relevanciaDiv.classList.add('card-info__relevancia');
    const textRelevancia = document.createElement('p');
    textRelevancia.classList.add('card-info__p');
    textRelevancia.innerText = emergencia.relevancia;
    relevanciaDiv.appendChild(textRelevancia);

    infoDiv.appendChild(categoriaDiv);
    infoDiv.appendChild(relevanciaDiv);

    // Título
    const titulo = document.createElement('h3');
    titulo.classList.add('card-titulo');
    titulo.innerText = emergencia.titulo;

    // Info pedido
    const infoPedido = document.createElement('div');
    infoPedido.classList.add('card-info-pedido');

    const infoPedidoLocalizacao = document.createElement('div');
    infoPedidoLocalizacao.insertAdjacentHTML('beforeend', svgIcons.localizacao);
    const textLocalizacao = document.createElement('p');
    textLocalizacao.innerText = emergencia.localizacao;
    textLocalizacao.classList.add('card-info-pedido__localizacao__p');
    infoPedidoLocalizacao.appendChild(textLocalizacao);

    const infoPedidoData = document.createElement('div');
    infoPedidoData.insertAdjacentHTML('beforeend', svgIcons.data);
    const textData = document.createElement('p');
    textData.innerText = `Ativo desde: ${emergencia.data}`;
    textData.classList.add('card-info-pedido__data__p');
    infoPedidoData.appendChild(textData);

    infoPedido.appendChild(infoPedidoLocalizacao);
    infoPedido.appendChild(infoPedidoData);

    // Descrição
    const descricao = document.createElement('p');
    descricao.classList.add('card-emergencia__descricao-pedido');
    descricao.innerText = emergencia.descricao;

    // Pedidos
    const pedidos = document.createElement('div');
    pedidos.classList.add('card-emergencia__pedido-qnt');
    pedidos.insertAdjacentHTML('beforeend', svgIcons.pedidos);
    const textPedidos = document.createElement('p');
    textPedidos.innerText = `Pedidos de ajuda: ${emergencia.pedidos}`;
    pedidos.appendChild(textPedidos);

    // Botão
    const botao = document.createElement('button');
    botao.classList.add('button-orange');
    botao.innerText = 'Ver mais sobre os pedidos';

    // Monta tudo no card
    card.appendChild(infoDiv);
    card.appendChild(titulo);
    card.appendChild(infoPedido);
    card.appendChild(descricao);
    card.appendChild(pedidos);
    card.appendChild(botao);

    return card;
}

const container = document.querySelector('.cards-emergencias-container');
emergencias.forEach((emergencia) => {
    const card = criarCard(emergencia);
    container.appendChild(card);
});

const form = document.getElementById('formFiltro');

form.addEventListener('submit', aplicarForm);