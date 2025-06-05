import { pedidosEmergencia } from '../../../js/data/pedidosEmergenciaData.js';
import { svgIcons } from '../../../js/shared/svgIcons.js';

export function carregarPedidosPorEmergencia(emergenciaID) {
    const emergencia = pedidosEmergencia.find(
        item => item.emergenciaId === Number(emergenciaID)
    );

    if (emergencia) {
        console.log(emergencia.pedidos);
        exibirPedidosNaTela(emergencia.pedidos);
    } else {
        console.warn('Nenhuma emergência encontrada com esse ID:', emergenciaID);
    }
}

// function criaDescricaoEmergencia() {

// }

function exibirPedidosNaTela(pedidos) {
    pedidos.forEach(pedidos => {
        criaCardPedido(pedidos);
    })
}

function criaCardPedido(pedido) {
    console.log(pedido)

    const containerCards = document.getElementsByClassName('tela-pedidos__cards-pedidos-container')[0];

    const card = document.createElement('div');
    card.classList.add('cards-pedidos-container__card');
    card.dataset.modalidade = pedido.modalidade;

    const cardInformacoes = document.createElement('div');
    cardInformacoes.classList.add('cards-pedidos-container__card__informacoes-do-pedido');
    cardInformacoes.insertAdjacentHTML('beforeend', '<img src="../../assets/img/emergency/foto-usuários/user.png" alt="Foto de perfil de usuário" class="cards-pedidos-container__card__foto-perfil">')

    const cardInformacoesDiv = document.createElement('div');
    cardInformacoes.appendChild(cardInformacoesDiv);

    // card heading
    const cardHeading = document.createElement('div');
    cardHeading.classList.add('cards-pedidos-container__card__heading');

    // Nome de usuário - Título
    const userName = document.createElement('h4');
    userName.classList.add('cards-pedidos-container__card__user-name');
    userName.innerText = pedido.nome;
    cardHeading.appendChild(userName);
    // Info modalidade
    const infoModalidade = document.createElement('div');
    infoModalidade.classList.add('info__modalidade');
    const infoModalideTexto = document.createElement('p');
    infoModalideTexto.classList.add('info__p');
    infoModalideTexto.innerText = pedido.modalidade;
    infoModalidade.appendChild(infoModalideTexto);
    cardHeading.appendChild(infoModalidade);
    cardInformacoesDiv.appendChild(cardHeading);

    // Descrição do pedido
    const descricaoPedido = document.createElement('p');
    descricaoPedido.classList.add('paragrafo');
    descricaoPedido.innerText = pedido.descricao;
    cardInformacoesDiv.appendChild(descricaoPedido);

    // card detalhes
    const cardDetalhes = document.createElement('div');
    cardDetalhes.classList.add('cards-pedidos-container__card__detalhes');
    // detalhe data
    const detalheData = document.createElement('div');
    detalheData.classList.add('cards-pedidos-container__card__data');
    detalheData.insertAdjacentHTML('beforeend', svgIcons.data);
    const detalheTextoData = document.createElement('p');
    detalheTextoData.innerText = `Há ${pedido.diasAtras} dias`;
    detalheData.appendChild(detalheTextoData);
    cardDetalhes.appendChild(detalheData);
    // detalhe localização
    const detalheLocalizacao = document.createElement('div');
    detalheLocalizacao.classList.add('cards-pedidos-container__card__localizacao');
    detalheLocalizacao.insertAdjacentHTML('beforeend', svgIcons.localizacao);
    const detalheTextoLocalizacao = document.createElement('p');
    detalheTextoLocalizacao.innerText = pedido.localizacao;
    detalheLocalizacao.appendChild(detalheTextoLocalizacao);
    cardDetalhes.appendChild(detalheLocalizacao);
    cardInformacoesDiv.appendChild(cardDetalhes);

    // button
    const btnVerMais = document.createElement('buttun');
    btnVerMais.classList = 'button-purple paragrafo';
    btnVerMais.innerText = 'Ver mais sobre o pedido';

    // Coloca tudo no card
    containerCards.appendChild(card);
    card.appendChild(cardInformacoes);
    card.appendChild(btnVerMais);
}