var grafico = document.getElementById('graficoDeterminacao').getContext('2d');
var criarGrafico;

function tocarTema(){
    temaPagina.play();
}
function butaoHover (){
    butao_hover_som.play()
}
function somClick (){
    butao_som.play()
}

function mostrarGrafico(competencia){
    spnLegenda.style.display = 'block'
    if (competencia == 'determinacao') {
        txtCompetencia.innerHTML = 'DETERMINAÇÃO'
        txtCompetencia.style.color = '#ff0000'
        graficoDeterminacao.style.display = 'block';
        graficoBravura.style.display = 'none';
        graficoJustica.style.display = 'none';
        graficoBondade.style.display = 'none';
        graficoPaciencia.style.display = 'none';
        graficoIntegridade.style.display = 'none';
        graficoPerseveranca.style.display = 'none';
        grafico = document.getElementById('graficoDeterminacao').getContext('2d');
        if (criarGrafico) {
            criarGrafico.destroy()
        } 
        criarGrafico = new Chart(grafico, {
            type: 'doughnut',
            data: {
                labels: ['Determinação', 'Falta Determinação...'],
                datasets: [{
                    data: [8, 10-8], // Exemplo de dados, com 70% de Determinação
                    backgroundColor: ['#ff0000', '#333333'], // Branco e cinza escuro
                    borderColor: '#000000', // Preto para simular uma borda forte
                    borderWidth: 0,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                }, 
            }
        });
    } else if (competencia == 'bravura') {
        txtCompetencia.innerHTML = 'BRAVURA'
        txtCompetencia.style.color = '#ff8c00'
        graficoDeterminacao.style.display = 'none';
        graficoBravura.style.display = 'block';
        graficoJustica.style.display = 'none';
        graficoBondade.style.display = 'none';
        graficoPaciencia.style.display = 'none';
        graficoIntegridade.style.display = 'none';
        graficoPerseveranca.style.display = 'none';
        grafico = document.getElementById('graficoBravura').getContext('2d');
        if (criarGrafico) {
            criarGrafico.destroy()
        } 
        criarGrafico = new Chart(grafico, {
            type: 'doughnut',
            data: {
                labels: ['Bravura', 'Falta Bravura...'],
                datasets: [{
                    data: [6, 10-6], // Exemplo de dados, com 70% de Determinação
                    backgroundColor: ['#ff8c00', '#333333'], // Branco e cinza escuro
                    borderColor: '#000000', // Preto para simular uma borda forte
                    borderWidth: 0,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                }, 
            }
        });
        
    } else if (competencia == 'justica') {
        txtCompetencia.innerHTML = 'JUSTIÇA'
        txtCompetencia.style.color = '#ffff00'
        graficoDeterminacao.style.display = 'none';
        graficoBravura.style.display = 'none';
        graficoJustica.style.display = 'block';
        graficoBondade.style.display = 'none';
        graficoPaciencia.style.display = 'none';
        graficoIntegridade.style.display = 'none';
        graficoPerseveranca.style.display = 'none';
        grafico = document.getElementById('graficoJustica').getContext('2d');
        if (criarGrafico) {
            criarGrafico.destroy()
        } 
        criarGrafico = new Chart(grafico, {
            type: 'doughnut',
            data: {
                labels: ['Justiça', 'Falta Justiça...'],
                datasets: [{
                    data: [3, 10-3], // Exemplo de dados, com 70% de Determinação
                    backgroundColor: ['#ffff00', '#333333'], // Branco e cinza escuro
                    borderColor: '#000000', // Preto para simular uma borda forte
                    borderWidth: 0,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                }, 
            }
        });
        
    } else if (competencia == 'bondade') {
        txtCompetencia.innerHTML = 'BONDADE'
        txtCompetencia.style.color = '#00ff59'
        graficoDeterminacao.style.display = 'none';
        graficoBravura.style.display = 'none';
        graficoJustica.style.display = 'none';
        graficoBondade.style.display = 'block';
        graficoPaciencia.style.display = 'none';
        graficoIntegridade.style.display = 'none';
        graficoPerseveranca.style.display = 'none';
        grafico = document.getElementById('graficoBondade').getContext('2d');
        if (criarGrafico) {
            criarGrafico.destroy()
        } 
        criarGrafico = new Chart(grafico, {
            type: 'doughnut',
            data: {
                labels: ['Bondade', 'Falta Bondade...'],
                datasets: [{
                    data: [6, 10-6], // Exemplo de dados, com 70% de Determinação
                    backgroundColor: ['#00ff59', '#333333'], // Branco e cinza escuro
                    borderColor: '#000000', // Preto para simular uma borda forte
                    borderWidth: 0,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                }, 
            }
        });
        
    } else if (competencia == 'paciencia') {
        txtCompetencia.innerHTML = 'PACIÊNCIA'
        txtCompetencia.style.color = '#00fff7'
        graficoDeterminacao.style.display = 'none';
        graficoBravura.style.display = 'none';
        graficoJustica.style.display = 'none';
        graficoBondade.style.display = 'none';
        graficoPaciencia.style.display = 'block';
        graficoIntegridade.style.display = 'none';
        graficoPerseveranca.style.display = 'none';
        grafico = document.getElementById('graficoPaciencia').getContext('2d');
        if (criarGrafico) {
            criarGrafico.destroy()
        } 
        criarGrafico = new Chart(grafico, {
            type: 'doughnut',
            data: {
                labels: ['Paciência', 'Falta Paciência...'],
                datasets: [{
                    data: [10, 10-10], // Exemplo de dados, com 70% de Determinação
                    backgroundColor: ['#00fff7', '#333333'], // Branco e cinza escuro
                    borderColor: '#000000', // Preto para simular uma borda forte
                    borderWidth: 0,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                }, 
            }
        });
    } else if (competencia == 'integridade') {
        txtCompetencia.innerHTML = 'INTEGRIDADE'
        txtCompetencia.style.color = '#0008ff'
        graficoDeterminacao.style.display = 'none';
        graficoBravura.style.display = 'none';
        graficoJustica.style.display = 'none';
        graficoBondade.style.display = 'none';
        graficoPaciencia.style.display = 'none';
        graficoIntegridade.style.display = 'block';
        graficoPerseveranca.style.display = 'none';
        grafico = document.getElementById('graficoIntegridade').getContext('2d');
        if (criarGrafico) {
            criarGrafico.destroy()
        } 
        criarGrafico = new Chart(grafico, {
            type: 'doughnut',
            data: {
                labels: ['Integridade', 'Falta Integridade...'],
                datasets: [{
                    data: [8, 10-8], // Exemplo de dados, com 70% de Determinação
                    backgroundColor: ['#0008ff', '#333333'], // Branco e cinza escuro
                    borderColor: '#000000', // Preto para simular uma borda forte
                    borderWidth: 0,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                }, 
            }
        });
    } else if (competencia == 'perseveranca') {
        txtCompetencia.innerHTML = 'PERSEVERANÇA'
        txtCompetencia.style.color = '#ff00ea'
        graficoDeterminacao.style.display = 'none';
        graficoBravura.style.display = 'none';
        graficoJustica.style.display = 'none';
        graficoBondade.style.display = 'none';
        graficoPaciencia.style.display = 'none';
        graficoIntegridade.style.display = 'none';
        graficoPerseveranca.style.display = 'block';
        grafico = document.getElementById('graficoPerseveranca').getContext('2d');
        if (criarGrafico) {
            criarGrafico.destroy()
        } 
        criarGrafico = new Chart(grafico, {
            type: 'doughnut',
            data: {
                labels: ['Perseverança', 'Falta Perseverança...'],
                datasets: [{
                    data: [5, 10-5], // Exemplo de dados, com 70% de Determinação
                    backgroundColor: ['#ff00ea', '#333333'], // Branco e cinza escuro
                    borderColor: '#000000', // Preto para simular uma borda forte
                    borderWidth: 0,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                }, 
            }
        });
    }
}