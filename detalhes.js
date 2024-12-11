// Obtém o ID do jogo passado pela URL
const urlParams = new URLSearchParams(window.location.search);
const gameIndex = urlParams.get('gameIndex');

// Função para exibir os detalhes do jogo
function displayGameDetails() {
    // Recupera os jogos do localStorage
    let games = JSON.parse(localStorage.getItem('games')) || [];

    // Verifica se o índice do jogo é válido
    if (gameIndex && games[gameIndex]) {
        const game = games[gameIndex];

        // Cria o conteúdo HTML para exibir os detalhes
        const gameDetailContainer = document.getElementById('game-detail-container');

        const gameImages = game.images.map(image => URL.createObjectURL(image)).join(', ');
        const gameImageSrc = URL.createObjectURL(game.images[0]);

        let imagesHtml = '';
        game.images.forEach(image => {
            if (image) {
                const imgUrl = URL.createObjectURL(image);
                imagesHtml += `<img src="${imgUrl}" alt="Imagem do Jogo">`;
            }
        });

        gameDetailContainer.innerHTML = `
            <div class="game-title">${game.name}</div>
            <div class="game-description">${game.description}</div>
            <div class="game-price"><strong>Preço:</strong> ${game.price}</div>
            <div class="game-credits"><strong>Créditos:</strong> ${game.credits}</div>
            <div class="game-images">
                ${imagesHtml}
            </div>
            <div class="game-video">
                ${game.video ? `<video controls><source src="${URL.createObjectURL(game.video)}" type="video/mp4"></video>` : ''}
            </div>
            <a href="${game.link}" class="game-btn" target="_blank">Jogar</a>
            <a href="${game.detailLink}" class="game-btn" target="_blank">Página Detalhada</a>
        `;
    } else {
        gameDetailContainer.innerHTML = `<p>Jogo não encontrado.</p>`;
    }
}

// Exibe os detalhes assim que a página for carregada
displayGameDetails();
