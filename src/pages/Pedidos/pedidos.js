        // Aguarda o DOM carregar completamente
        document.addEventListener('DOMContentLoaded', () => {
            // Elementos do DOM
            const searchInput = document.querySelector('#f-search');
            const filterForm = document.querySelector('.f-filtros');
            const searchForm = document.querySelector('.pedidos-filtros');
            const cardsContainer = document.querySelector('.cards-pedido-conteiner');
            const cards = document.querySelectorAll('.card-pedido');

            // Função para normalizar texto (remover acentos e converter para minúsculas)
            function normalizeText(text) {
                return text.toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .trim();
            }

            // Mapa de correspondência entre valores dos checkboxes e textos das categorias
            const categoryMap = {
                'saude': 'saude',
                'saude-mental': 'saude mental',
                'vida-cotidiana': 'vida cotidiana',
                'educacao': 'educacao',
                'direito-cidadania': 'direito cidadania',
                'moradia': 'moradia',
                'tecnologia': 'tecnologia',
                'transporte': 'transporte',
                'financeiro': 'financeiro',
                'animal': 'animal',
                'meio-ambiente': 'meio ambiente',
                'documentacao': 'documentacao',
                'comercio': 'comercio',
                'trabalho': 'trabalho'
            };

            // Armazena as categorias selecionadas
            let activeCategories = [];

            // Previne o formulário de pesquisa de recarregar a página
            if (searchForm) {
                searchForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                });
            }

            // Função para filtrar os cards baseado na pesquisa
            function filterBySearch() {
                const searchTerm = normalizeText(searchInput.value);
                
                cards.forEach(card => {
                    const cardTitle = normalizeText(card.querySelector('.card-titulo').textContent);
                    const categoryElement = card.querySelector('.info__categoria .info__p');
                    const category = normalizeText(categoryElement.textContent);

                    // Verifica se alguma palavra do título começa com o termo pesquisado
                    const matchesSearch = searchTerm === '' || 
                        cardTitle.split(' ').some(word => normalizeText(word).startsWith(searchTerm));

                    // Verifica se passa no filtro de categoria atual
                    const matchesCategory = activeCategories.length === 0 || 
                        activeCategories.some(selected => {
                            return category === selected || 
                                   (category.startsWith(selected + ' ') || category.endsWith(' ' + selected));
                        });

                    // Só mostra se passar em ambos os filtros
                    if (matchesSearch && matchesCategory) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });

                updateLayout();
            }

            // Função para atualizar o layout do container
            function updateLayout() {
                if (cardsContainer) {
                    cardsContainer.style.display = 'grid';
                    cardsContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
                    cardsContainer.style.gap = '1rem';
                    cardsContainer.style.width = '100%';
                }
            }

            // Função para aplicar os filtros de categoria
            function applyCategoryFilters(e) {
                e.preventDefault();
                const checkedBoxes = filterForm.querySelectorAll('input[type="checkbox"]:checked');
                
                // Atualiza as categorias ativas
                activeCategories = Array.from(checkedBoxes).map(cb => {
                    return normalizeText(categoryMap[cb.value] || cb.value);
                });

                // Aplica os filtros atuais
                filterBySearch();
            }

            // Adiciona evento de busca em tempo real
            if (searchInput) {
                searchInput.addEventListener('input', filterBySearch);
            }

            // Adiciona evento ao formulário de filtros (apenas quando clicar no botão)
            if (filterForm) {
                filterForm.addEventListener('submit', applyCategoryFilters);
            }

            console.log('Sistema de filtros inicializado');
        });
