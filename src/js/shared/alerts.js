export function setupEmergencyAlerts() {
    // mensagens temporárias
    const alertMessages = [
        { text: "ALERTA ATIVO: Enchentes no Rio Grande do Sul - 127 pedidos de ajuda urgentes"},
        { text: "ALERTA ATIVO: Deslizamentos em Santa Catarina - 42 pessoas desalojadas"},
        { text: "ALERTA ATIVO: Queimada na Amazônia - 870 pedidos de ajuda urgentes"}
    ];

    const alertEmergencias = document.querySelector(".alert-emergencias-ativas");
    const alertMessage = document.querySelector('.alert-emergencias-ativas__text');

    if (!alertEmergencias || !alertMessage) {
        console.error("Elementos do alerta não encontrados!");
        return;
    }

    function rotateAlert() {
        let currentIndex = 0;
        
        updateAlert(currentIndex);
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % alertMessages.length;
            updateAlert(currentIndex);
        }, 5000);
    }

    function updateAlert(index) {
        alertMessage.style.opacity = 0;
        
        setTimeout(() => {
            const message = alertMessages[index];
            alertMessage.textContent = message.text;
            
            alertEmergencias.className = 'alert-emergencias-ativas';
            alertEmergencias.classList.add(`alert-${message.type}`);
            
            alertMessage.style.opacity = 1;
        }, 500);
    }

    rotateAlert();
}