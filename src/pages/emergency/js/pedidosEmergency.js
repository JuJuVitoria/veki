import { emergencias } from '../../../js/data/emergenciasData.js';
import { pedidosEmergencia } from '../../../js/data/pedidosEmergenciaData.js';
import { svgIcons } from '../../../js/shared/svgIcons.js';
import { imgs } from '../../../js/shared/imgs.js';
import { criarTelaPedido } from './telaSobrePedido.js';

export function carregarPedidosPorEmergencia(emergenciaID) {
    const emergenciaData = pedidosEmergencia.find(
        item => item.emergenciaId === Number(emergenciaID)
    );

    if (emergenciaData) {
        limparTelaPedidos();

        const telaPedido = document.getElementById('telaPedidos');
        telaPedido.style.display = "block";

        exibeDescricaoEmergencia(emergencias, emergenciaID);
        exibirPedidosNaTela(emergenciaData.pedidos, emergenciaID);
    } else {
        console.warn('Nenhuma emergência encontrada com esse ID:', emergenciaID);
    }
}

function limparTelaPedidos() {
    const telaPedido = document.getElementById('telaPedidos');
    telaPedido.innerHTML = '';
}

// Mostra descrição da emergência
function exibeDescricaoEmergencia(listaEmergencias, id) {
    const emergencia = listaEmergencias[id - 1];
    const telaPedido = document.getElementById('telaPedidos');

    const descricaoEmergencia = document.createElement('div');
    descricaoEmergencia.classList.add('tela-pedidos__descricao-emergencia');
    descricaoEmergencia.dataset.categoria = emergencia.categoria;
    descricaoEmergencia.dataset.relevancia = emergencia.relevancia;

    descricaoEmergencia.style.backgroundImage = imgs[emergencia.categoria];
    descricaoEmergencia.style.backgroundSize = 'cover';
    descricaoEmergencia.style.backgroundPosition = 'center';
    descricaoEmergencia.style.backgroundRepeat = 'no-repeat';

    const btnCloseTelaPedido = document.createElement('button');
    btnCloseTelaPedido.classList.add('tela-pedidos__descricao-emergencia__btn-close');
    btnCloseTelaPedido.id = 'btnCloseTelaPedidos';
    btnCloseTelaPedido.insertAdjacentHTML('beforeend', svgIcons.close);
    btnCloseTelaPedido.addEventListener('click', () => {
        const telaPedido = document.getElementById('telaPedidos');
        telaPedido.style.display = "none";
    });

    descricaoEmergencia.appendChild(btnCloseTelaPedido);

    const info = document.createElement('div');
    info.classList.add('tela-pedidos__descricao-emergencia__info');

    const categoria = document.createElement('div');
    categoria.classList.add('info__categoria');
    categoria.innerHTML = `<p class="info__p">${emergencia.categoria}</p>`;

    const relevancia = document.createElement('div');
    relevancia.classList.add('info__relevancia');
    relevancia.innerHTML = `<p class="info__p">${emergencia.relevancia}</p>`;

    info.appendChild(categoria);
    info.appendChild(relevancia);

    const titulo = document.createElement('h2');
    titulo.classList.add('tela-pedidos__descricao-emergencia__titulo');
    titulo.innerText = emergencia.titulo;

    const descricaoTexto = document.createElement('p');
    descricaoTexto.classList.add('tela-pedidos__descricao-emergencia__descrição', 'paragrafo');
    descricaoTexto.innerText = emergencia.descricao;

    descricaoEmergencia.appendChild(info);
    descricaoEmergencia.appendChild(titulo);
    descricaoEmergencia.appendChild(descricaoTexto);

    telaPedido.appendChild(descricaoEmergencia);

    const containerPedidos = document.createElement('div');
    containerPedidos.classList.add('tela-pedidos__cards-pedidos-container');
    telaPedido.appendChild(containerPedidos);
}

function exibirPedidosNaTela(pedidos, id) {
    const container = document.querySelector('.tela-pedidos__cards-pedidos-container');
    pedidos.forEach(pedido => {
        const card = criaCardPedido(pedido, id);
        container.appendChild(card);
    });
}

function criaCardPedido(pedido, idEmergencia) {
    const card = document.createElement('div');
    card.classList.add('cards-pedidos-container__card');
    card.dataset.modalidade = pedido.modalidade;

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('cards-pedidos-container__card__informacoes-do-pedido');

    cardInfo.insertAdjacentHTML(
        'beforeend',
        `<img src="../../assets/img/emergency/foto-usuários/user.png" alt="Foto de perfil de usuário" class="cards-pedidos-container__card__foto-perfil">`
    );

    const cardBody = document.createElement('div');

    const heading = document.createElement('div');
    heading.classList.add('cards-pedidos-container__card__heading');

    const nome = document.createElement('h4');
    nome.classList.add('cards-pedidos-container__card__user-name');
    nome.innerText = pedido.nome;

    const modalidade = document.createElement('div');
    modalidade.classList.add('info__modalidade');
    modalidade.innerHTML = `<p class="info__p">${pedido.modalidade}</p>`;

    heading.appendChild(nome);
    heading.appendChild(modalidade);
    cardBody.appendChild(heading);

    const descricao = document.createElement('p');
    descricao.classList.add('paragrafo');
    descricao.innerText = pedido.descricao;
    cardBody.appendChild(descricao);

    const detalhes = document.createElement('div');
    detalhes.classList.add('cards-pedidos-container__card__detalhes');

    const data = document.createElement('div');
    data.classList.add('cards-pedidos-container__card__data');
    data.insertAdjacentHTML('beforeend', svgIcons.data);
    data.innerHTML += `<p>Há ${pedido.diasAtras} dias</p>`;

    const localizacao = document.createElement('div');
    localizacao.classList.add('cards-pedidos-container__card__localizacao');
    localizacao.insertAdjacentHTML('beforeend', svgIcons.localizacao);
    localizacao.innerHTML += `<p>${pedido.localizacao}</p>`;

    detalhes.appendChild(data);
    detalhes.appendChild(localizacao);

    cardBody.appendChild(detalhes);
    cardInfo.appendChild(cardBody);

    const botao = document.createElement('button');
    botao.classList.add('button-purple', 'paragrafo', 'btnVerPedido');
    botao.id = `idEmergencia-${idEmergencia}`
    botao.innerText = 'Ver mais sobre o pedido';

    card.appendChild(cardInfo);
    card.appendChild(botao);

    botao.addEventListener('click', () => {
        const oldModal = document.querySelector('.order-modal');
        if (oldModal) oldModal.remove();

        const modal = criarTelaPedido(idEmergencia);
        console.log('Modal criado:', modal);
        if (modal) document.body.appendChild(modal);
    });

    return card;
}