export function alertVoluntariadoConfirmado() {
  const alertBox = document.getElementById('custom-alert');
  const title = document.getElementById('alert-title');
  const text = document.getElementById('alert-text');
  const confirmBtn = document.getElementById('alert-confirm');
  const cancelBtn = document.getElementById('alert-cancel');

  // Etapa 1: confirmação
  title.innerText = 'Confirmar voluntariado?';
  text.innerText = 'Você está prestes a se voluntariar para essa missão. Deseja continuar?';
  alertBox.style.display = 'flex';

  const reset = () => {
    alertBox.style.display = 'none';
    confirmBtn.onclick = null;
    cancelBtn.onclick = null;
  };

  confirmBtn.onclick = () => {
    // Etapa 2: agradecimento
    title.innerText = 'Muito obrigado!';
    text.innerText = 'Seu voluntariado foi registrado com sucesso. Entraremos em contato em breve!';
    confirmBtn.innerText = 'Fechar';
    cancelBtn.style.display = 'none';

    confirmBtn.onclick = () => {
      // Etapa 3: mensagem final
      title.innerText = 'Sucesso!';
      text.innerText = 'Você será redirecionado ou pode fechar esta mensagem.';
      confirmBtn.innerText = 'Fechar';

      confirmBtn.onclick = () => {
        reset();
      };
    };
  };

  cancelBtn.onclick = () => {
    reset();
  };
}