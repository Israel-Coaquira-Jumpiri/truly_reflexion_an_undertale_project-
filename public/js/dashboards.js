var grafico = document.getElementById('graficoDeterminacao').getContext('2d');
var criarGrafico;

function tocarTema(){
    temaPagina.play();
}
function butaoHover (){
    butao_hover_som.play()
}
function somClick (){
    butao_som.currentTime = 0
    butao_som.play()
}
    var ptsDeterminacao = 5;
    var ptsBravura = 5;
    var ptsJustica = 5;
    var ptsBondade = 5;
    var ptsPaciencia = 5;
    var ptsIntegridade = 5;
    var ptsPerseveranca = 5;

function receberPontuacaoAtual(){
    if (sessionStorage.PRIMEIRO_ACESSO == 0) {;
        ptsDeterminacao = 5;
        ptsBravura = 5;
        ptsJustica = 5;
        ptsBondade = 5;
        ptsPaciencia = 5;
        ptsIntegridade = 5;
        ptsPerseveranca = 5;
    } else{
    fetch(`/pontuacoes/listarPontuacao/${sessionStorage.ID_USUARIO}`, {
        method: "GET",
    }).then(function (respostaPontuacoes) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (respostaPontuacoes.ok) {
            console.log(respostaPontuacoes);

            respostaPontuacoes.json().then(dados => {
                console.log(dados[0]);
                console.log(JSON.stringify(dados[0]));
                ptsDeterminacao = dados[0].determinacao;
                ptsBravura = dados[0].bravura;
                ptsJustica = dados[0].justica;
                ptsBondade = dados[0].bondade;
                ptsPaciencia = dados[0].paciencia;
                ptsIntegridade = dados[0].integridade;
                ptsPerseveranca = dados[0].perseveranca;
            });
        } else {
            console.log("Houve um erro ao puxar os dados do questionario anterior!");
            respostaPontuacoes.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}
}

function mostrarGrafico(competencia){
    spnLegenda.style.display = 'block'
    if (competencia == 'determinacao') {
        txtCompetencia.innerHTML = 'DETERMINAÇÃO'
        pctCompetencia.innerHTML = ptsDeterminacao;
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
                    data: [ptsDeterminacao, 10-ptsDeterminacao], // Exemplo de dados, com 70% de Determinação
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
        pctCompetencia.innerHTML = ptsBravura;
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
                    data: [ptsBravura, 10-ptsBravura], // Exemplo de dados, com 70% de Determinação
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
        pctCompetencia.innerHTML = ptsJustica;
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
                    data: [ptsJustica, 10-ptsJustica], // Exemplo de dados, com 70% de Determinação
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
        pctCompetencia.innerHTML = ptsBondade;
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
                    data: [ptsBondade, 10-ptsBondade], // Exemplo de dados, com 70% de Determinação
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
        pctCompetencia.innerHTML = ptsPaciencia;
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
                    data: [ptsPaciencia, 10-ptsPaciencia], // Exemplo de dados, com 70% de Determinação
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
        pctCompetencia.innerHTML = ptsIntegridade;
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
                    data: [ptsIntegridade, 10-ptsIntegridade], // Exemplo de dados, com 70% de Determinação
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
        pctCompetencia.innerHTML = ptsPerseveranca;
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
                    data: [ptsPerseveranca, 10-ptsPerseveranca], // Exemplo de dados, com 70% de Determinação
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