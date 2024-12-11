// Dados dos jogos e quantidade de jogadores
const gamesData = [
    { name: "Campo de Batalha Médio", players: 40 },
    { name: "Criminality", players: 100 },
    { name: "Gunfight Arena", players: 23 },
    { name: "Blacksite Zeta", players: 17 },
    { name: "Shinobi Life", players: 12 }
];

// Ordena os jogos do maior para o menor número de jogadores
const sortedGames = gamesData.sort((a, b) => b.players - a.players);

// Configurações do gráfico
const ctx = document.getElementById('playerChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: sortedGames.map(game => game.name),
        datasets: [{
            label: 'Jogadores',
            data: sortedGames.map(game => game.players),
            backgroundColor: [
                '#007bff', '#28a745', '#dc3545', '#ffc107', '#6c757d'
            ],
            borderColor: [
                '#0056b3', '#1e7e34', '#bd2130', '#e0a800', '#495057'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 500
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.raw} jogadores`
                }
            }
        }
    }
});
