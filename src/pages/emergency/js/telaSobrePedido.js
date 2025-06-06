import { infoUsers } from "../../../js/data/userData.js";

export function criarTelaPedido(IDpedido) {
    const usuario = infoUsers.find(user => user.idPedidoEmergencia === Number(IDpedido));
    console.log('Buscando usuário para idPedidoEmergencia:', IDpedido, usuario);
    if (!usuario) {
        alert('Usuário não encontrado para este pedido.');
        return null;
    }

    const modal = document.createElement('div');
    modal.classList.add('order-modal');

    // Ações (back e close)
    const actions = document.createElement('div');
    actions.classList.add('order-modal__actions');

    const btnBack = document.createElement('button');
    btnBack.classList.add('order-modal__button', 'order-modal__button--back');
    btnBack.innerHTML = '←';

    const btnClose = document.createElement('button');
    btnClose.classList.add('order-modal__button', 'order-modal__button--close');
    btnClose.innerHTML = '✖';

    actions.appendChild(btnBack);
    actions.appendChild(btnClose);

    // Perfil do usuário
    const profile = document.createElement('div');
    profile.classList.add('order-modal__profile');
    profile.dataset.verified = usuario.verificado;

    const profileInfo = document.createElement('div');
    profileInfo.classList.add('order-modal__profile-info');

    const profileMain = document.createElement('div');
    profileMain.classList.add('order-modal__profile-main');

    const status = document.createElement('div');
    status.classList.add('order-modal__profile-status');
    const statusP = document.createElement('p');
    statusP.innerText = usuario.verificado ? 'Verificado' : 'Não Verificado';
    status.appendChild(statusP);

    const img = document.createElement('img');
    img.src = '../../assets/img/emergency/foto-usuários/user.png';
    img.alt = 'Foto de perfil do usuário';
    img.classList.add('order-modal__avatar');

    const name = document.createElement('h4');
    name.classList.add('order-modal__name');
    name.innerText = usuario.nome;

    const email = document.createElement('p');
    email.classList.add('order-modal__email');
    email.innerText = usuario.email;

    const phone = document.createElement('p');
    phone.classList.add('order-modal__phone');
    phone.innerText = usuario.telefone;

    profileMain.append(status, img, name, email, phone);

    const separator = document.createElement('div');
    separator.classList.add('order-modal__separator');

    const details = document.createElement('div');
    details.classList.add('order-modal__details');

    const detailsInfo = document.createElement('div');
    detailsInfo.classList.add('order-modal__details-info');

    // Função auxiliar para criar campos simples
    const criarCampo = (label, valor) => {
        const div = document.createElement('div');

        const pLabel = document.createElement('p');
        pLabel.classList.add('order-modal__label');
        pLabel.innerText = label;

        const pValue = document.createElement('p');
        pValue.classList.add('text-paragraph');
        pValue.innerText = valor;

        div.append(pLabel, pValue);
        return div;
    };

    detailsInfo.append(
        criarCampo('Idioma:', usuario.idioma),
        criarCampo('Idade:', `${usuario.idade} anos`),
        criarCampo('Cidade:', usuario.cidade),
        criarCampo('Data de cadastro:', usuario.dataCadastro)
    );

    const skills = document.createElement('div');
    skills.classList.add('order-modal__skills');

    const skillsLabel = document.createElement('p');
    skillsLabel.classList.add('order-modal__label');
    skillsLabel.innerText = 'Habilidades:';

    const skillsValue = document.createElement('p');
    skillsValue.classList.add('text-paragraph');
    skillsValue.innerText = usuario.habilidades.join(', ');

    skills.append(skillsLabel, skillsValue);

    details.append(detailsInfo, skills);

    profileInfo.append(profileMain, separator, details);

    const bio = document.createElement('div');
    bio.classList.add('order-modal__bio');

    const bioTitle = document.createElement('h5');
    bioTitle.classList.add('order-modal__bio-title');
    bioTitle.innerText = 'Biografia:';

    const bioText = document.createElement('p');
    bioText.classList.add('text-paragraph');
    bioText.innerText = usuario.biografia;

    bio.append(bioTitle, bioText);
    profile.append(profileInfo, bio);

    // Pontuação
    const score = document.createElement('div');
    score.classList.add('order-modal__score');

    const scoreTitle = document.createElement('h4');
    scoreTitle.classList.add('order-modal__section-title');
    scoreTitle.innerText = 'Pontuação';

    const scoreInfo = document.createElement('div');
    scoreInfo.classList.add('order-modal__score-info');

    scoreInfo.append(
        criarCampo('Colaborações:', usuario.colaboracoes),
        criarCampo('Pedidos:', usuario.pedidos),
        criarCampo(
            'Classificação:',
            usuario.colaboracoes + usuario.pedidos > 5 ? 'Medalha Ouro' : 'Medalha Prata'
        )
    );

    score.append(scoreTitle, scoreInfo);

    // Informações do pedido
    const requestInfo = document.createElement('div');
    requestInfo.classList.add('order-modal__request-info');

    const requestTitle = document.createElement('h4');
    requestTitle.classList.add('order-modal__section-title');
    requestTitle.innerText = 'Informações sobre o pedido';

    const requestText = document.createElement('p');
    requestText.classList.add('text-paragraph');
    requestText.innerText = `Descrição do pedido associado ao ID ${usuario.idPedidoEmergencia}`;

    const requestDetails = document.createElement('div');
    requestDetails.classList.add('order-modal__request-details');

    const requestDate = document.createElement('div');
    requestDate.classList.add('order-modal__request-date');
    const dateP = document.createElement('p');
    dateP.classList.add('text-paragraph');
    dateP.innerText = 'Há um dia';
    requestDate.append(dateP);

    const requestLocation = document.createElement('div');
    requestLocation.classList.add('order-modal__request-location');
    const locationP = document.createElement('p');
    locationP.classList.add('text-paragraph');
    locationP.innerText = 'Localização do pedido';
    requestLocation.append(locationP);

    requestDetails.append(requestDate, requestLocation);

    requestInfo.append(requestTitle, requestText, requestDetails);

    // Botão voluntário
    const btnVolunteer = document.createElement('button');
    btnVolunteer.classList.add('button-orange', 'order-modal__button-volunteer');
    btnVolunteer.innerText = 'Se voluntariar';

    // Montagem final
    modal.append(actions, profile, score, requestInfo, btnVolunteer);


    const btnClose1 = modal.querySelector('.order-modal__button--close');
    if (btnClose1) {
        btnClose1.addEventListener('click', () => modal.remove());
    }

    return modal;
}