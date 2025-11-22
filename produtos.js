// Arquivo: produtos.js

document.addEventListener("DOMContentLoaded", () => {
    
    // ============================
    // 1. VARIÁVEIS DE ELEMENTOS DO DOM
    // ============================
    const searchInput = document.getElementById('search-input');
    const priceFilter = document.getElementById('price-filter');
    const applyButton = document.querySelector('.apply-button'); // O novo botão "Aplicar Filtros"
    const productGrid = document.getElementById('product-grid');
    
    // Verifica se a grade de produtos existe
    if (!productGrid) {
        console.error("Elemento '#product-grid' não encontrado. O script de filtragem não funcionará.");
        return; 
    }

    // ============================
    // 2. LÓGICA DE FILTRAGEM DE PRODUTOS (por Nome e Preço)
    // ============================
    
    /**
     * Aplica os filtros de busca e preço a todos os produtos na grade.
     */
    function filterProducts() {
        // Captura os valores atuais dos filtros
        const searchText = searchInput.value.toLowerCase().trim();
        // Converte o valor do select para float; 0 significa 'Qualquer Valor'
        const maxPrice = parseFloat(priceFilter.value);
        const cards = productGrid.querySelectorAll('.card');

        cards.forEach(card => {
            // Obtém dados do produto (já em minúsculas e float)
            const productName = card.getAttribute('data-product').toLowerCase();
            const productPrice = parseFloat(card.getAttribute('data-price'));

            // a. Filtro de Texto: O nome do produto deve incluir o termo de busca.
            const matchesText = productName.includes(searchText);

            // b. Filtro de Preço: Se maxPrice for 0, qualquer preço é aceito. Caso contrário, deve ser menor ou igual.
            const matchesPrice = (maxPrice === 0 || productPrice <= maxPrice);

            // Aplica a visibilidade: Se ambos os filtros corresponderem, o card é visível.
            if (matchesText && matchesPrice) {
                // Usa 'flex' para o display, caso o card seja um item flex/grid, garantindo que o CSS Flexbox funcione corretamente.
                card.style.display = ''; 
            } else {
                card.style.display = 'none'; // Esconde o produto
            }
        });
    }

    // ============================
    // 3. ATRIBUIÇÃO DOS EVENTOS DE FILTRO
    // ============================
    
    // A. Busca por Texto: Filtra a cada letra digitada para feedback instantâneo.
    searchInput.addEventListener('input', filterProducts);
    
    // B. Preço Máximo: Filtra assim que uma opção é selecionada.
    priceFilter.addEventListener('change', filterProducts);
    
    // C. Botão "Aplicar Filtros": (Opcional, mas adicionado para robustez)
    applyButton.addEventListener('click', (e) => {
        e.preventDefault(); // Impede qualquer ação padrão do botão (como submit em um formulário)
        filterProducts();
    });

    // Chama a função uma vez ao carregar a página para garantir que os produtos estejam visíveis 
    // ou filtrados se houver valores padrão nos inputs.
    filterProducts();


    // ============================
    // 4. LÓGICA DE COMPRA (Funcionalidade de redirecionamento)
    // ============================
    
    document.querySelectorAll(".card .buy-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const card = e.target.closest(".card");
            
            // Verifica se o card foi encontrado
            if (!card) return; 

            const product = card.getAttribute("data-product");
            const price = card.getAttribute("data-price");
            
            // Cria os parâmetros de URL para o checkout
            const params = new URLSearchParams({ 
                product: product, 
                price: price 
            });
            
            // Redireciona para a página de checkout
            window.location.href = `checkout.html?${params.toString()}`;
        });
    });
});
