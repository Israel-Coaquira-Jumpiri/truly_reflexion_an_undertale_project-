var grafico = "";
var graficoExistente;
var modo_menu = "fechado"
var modoGraficos = "Gráficos de rosca com resultados atuais"
var historico_determinacao = [];
var historico_bravura = [];
var historico_justica = [];
var historico_bondade = [];
var historico_paciencia = [];
var historico_integridade = [];
var historico_perseveranca = [];
var historico_tentativas = [];
var ptsDeterminacao = 5;
var ptsBravura = 5;
var ptsJustica = 5;
var ptsBondade = 5;
var ptsPaciencia = 5;
var ptsIntegridade = 5;
var ptsPerseveranca = 5;
var maiores_pontuacoes = {
    determinacao: 0,
    bravura: 0,
    justica: 0,
    bondade: 0,
    paciencia: 0,
    integridade: 0,
    perseveranca: 0
}
var menores_pontuacoes = {
    determinacao: 0,
    bravura: 0,
    justica: 0,
    bondade: 0,
    paciencia: 0,
    integridade: 0,
    perseveranca: 0
}

function tocarTema(){
    temaPagina.play();
}
function butaoHover (){
    butao_hover_som.play()
}
function voltarParaSessao(){
    setTimeout(()=> window.location.href = "./sessao.html", 200)
}
function mudarModoMenu(){
    if (modo_menu == "fechado") {
        div_menu.style.cssText = `right: 0vw;`;
        modo_menu = "aberto"
    } else {
        div_menu.style.cssText = `right: -15vw;`;
        modo_menu = "fechado"
    }
}
function verResultados(){
    spnLegenda.style.display = 'none'
    txtCompetencia.innerHTML = '';
    pctCompetencia.innerHTML = "";
    txtCompetencia.style.color = ''
    graficoDeterminacao.style.display = 'none';
    graficoBravura.style.display = 'none';
    graficoJustica.style.display = 'none';
    graficoBondade.style.display = 'none';
    graficoPaciencia.style.display = 'none';
    graficoIntegridade.style.display = 'none';
    graficoPerseveranca.style.display = 'none';
    div_menu.style.cssText = `right: -15vw;`;
    modo_menu = "fechado"
    titulo.innerHTML = "RESULTADOS"
    modoGraficos = "Gráficos de rosca com resultados atuais";
}
function verHistorico(){
    spnLegenda.style.display = 'none'
    txtCompetencia.innerHTML = '';
    pctCompetencia.innerHTML = "";
    txtCompetencia.style.color = ''
    graficoDeterminacao.style.display = 'none';
    graficoBravura.style.display = 'none';
    graficoJustica.style.display = 'none';
    graficoBondade.style.display = 'none';
    graficoPaciencia.style.display = 'none';
    graficoIntegridade.style.display = 'none';
    graficoPerseveranca.style.display = 'none';
    div_menu.style.cssText = `right: -15vw;`;
    modo_menu = "fechado"
    titulo.innerHTML = "HISTÓRICO"
    modoGraficos = "Gráficos de linha com histórico de pontuações";
}
function somClick (){
    butao_som.currentTime = 0
    butao_som.play()
}

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
                // for (let cont = 0; cont < array.length; cont++) {
                //     const element = array[cont];
                    
                // }
                var contador_quest = 1;
                maiores_pontuacoes.determinacao = dados[0].determinacao;
                maiores_pontuacoes.bravura = dados[0].bravura;
                maiores_pontuacoes.justica = dados[0].justica;
                maiores_pontuacoes.bondade = dados[0].bondade;
                maiores_pontuacoes.paciencia = dados[0].paciencia;
                maiores_pontuacoes.integridade = dados[0].integridade;
                maiores_pontuacoes.perseveranca = dados[0].perseveranca;
                menores_pontuacoes.determinacao = dados[0].determinacao;
                menores_pontuacoes.bravura = dados[0].bravura;
                menores_pontuacoes.justica = dados[0].justica;
                menores_pontuacoes.bondade = dados[0].bondade;
                menores_pontuacoes.paciencia = dados[0].paciencia;
                menores_pontuacoes.integridade = dados[0].integridade;
                menores_pontuacoes.perseveranca = dados[0].perseveranca;
                for (var contador = (dados.length-1); contador >= 0; contador--) {
                    if (dados[contador].determinacao > maiores_pontuacoes.determinacao) {
                        maiores_pontuacoes.determinacao = dados[contador].determinacao;
                    } else if (dados[contador].bravura > maiores_pontuacoes.bravura) {
                        maiores_pontuacoes.bravura = dados[contador].bravura;
                    } else if (dados[contador].justica > maiores_pontuacoes.justica) {
                        maiores_pontuacoes.justica = dados[contador].justica;
                    } else if (dados[contador].bondade > maiores_pontuacoes.bondade) {
                        maiores_pontuacoes.bondade = dados[contador].bondade;
                    } else if (dados[contador].paciencia > maiores_pontuacoes.paciencia) {
                        maiores_pontuacoes.paciencia = dados[contador].paciencia;
                    } else if (dados[contador].integridade > maiores_pontuacoes.integridade) {
                        maiores_pontuacoes.integridade = dados[contador].integridade;
                    } else if (dados[contador].perseveranca > maiores_pontuacoes.perseveranca) {
                        maiores_pontuacoes.perseveranca = dados[contador].perseveranca;
                    }
                    if (dados[contador].determinacao < menores_pontuacoes.determinacao) {
                        menores_pontuacoes.determinacao = dados[contador].determinacao;
                    } else if (dados[contador].bravura < menores_pontuacoes.bravura) {
                        menores_pontuacoes.bravura = dados[contador].bravura;
                    } else if (dados[contador].justica < menores_pontuacoes.justica) {
                        menores_pontuacoes.justica = dados[contador].justica;
                    } else if (dados[contador].bondade < menores_pontuacoes.bondade) {
                        menores_pontuacoes.bondade = dados[contador].bondade;
                    } else if (dados[contador].paciencia < menores_pontuacoes.paciencia) {
                        menores_pontuacoes.paciencia = dados[contador].paciencia;
                    } else if (dados[contador].integridade < menores_pontuacoes.integridade) {
                        menores_pontuacoes.integridade = dados[contador].integridade;
                    } else if (dados[contador].perseveranca < menores_pontuacoes.perseveranca) {
                        menores_pontuacoes.perseveranca = dados[contador].perseveranca;
                    }
                    historico_determinacao.push(dados[contador].determinacao);
                    historico_bravura.push(dados[contador].bravura);
                    historico_justica.push(dados[contador].justica);
                    historico_bondade.push(dados[contador].bondade);
                    historico_paciencia.push(dados[contador].paciencia);
                    historico_integridade.push(dados[contador].integridade);
                    historico_perseveranca.push(dados[contador].perseveranca);
                    historico_tentativas.push(`${contador_quest}º Passo`)
                    contador_quest++
                    
                }
                var ultimo_indice_listas = historico_determinacao.length-1;
                ptsDeterminacao = historico_determinacao[ultimo_indice_listas];
                ptsBravura = historico_bravura[ultimo_indice_listas];
                ptsJustica = historico_justica[ultimo_indice_listas];
                ptsBondade = historico_bondade[ultimo_indice_listas];
                ptsPaciencia = historico_paciencia[ultimo_indice_listas];
                ptsIntegridade = historico_integridade[ultimo_indice_listas];
                ptsPerseveranca = historico_perseveranca[ultimo_indice_listas];
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
    if (modoGraficos == "Gráficos de rosca com resultados atuais") {
        spnLegenda.style.display = 'block'
        div_chart.style.cssText = `width: 30vw; height: 30vw;`;
    if (competencia == 'determinacao') {
        txtCompetencia.innerHTML = 'DETERMINAÇÃO'
        pctCompetencia.innerHTML = ptsDeterminacao * 10;
        txtCompetencia.style.color = '#ff0000'
        graficoDeterminacao.style.display = 'block';
        graficoBravura.style.display = 'none';
        graficoJustica.style.display = 'none';
        graficoBondade.style.display = 'none';
        graficoPaciencia.style.display = 'none';
        graficoIntegridade.style.display = 'none';
        graficoPerseveranca.style.display = 'none';
        
        elemento_grafico = document.getElementById('graficoJustica');
        grafico = elemento_grafico.getContext('2d');
        elemento_grafico.style.cssText = "left: 7vw; bottom: auto";

        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        graficoExistente = new Chart(grafico, {
            type: 'doughnut',
            data: {
                labels: ['Determinação', 'Falta Determinação...'],
                datasets: [{
                    data: [ptsDeterminacao, 10-ptsDeterminacao], 
                    backgroundColor: ['#ff0000', '#333333'],
                    borderColor: '#000000',
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
        pctCompetencia.innerHTML = ptsBravura * 10;
        txtCompetencia.style.color = '#ff8c00'
        graficoDeterminacao.style.display = 'none';
        graficoBravura.style.display = 'block';
        graficoJustica.style.display = 'none';
        graficoBondade.style.display = 'none';
        graficoPaciencia.style.display = 'none';
        graficoIntegridade.style.display = 'none';
        graficoPerseveranca.style.display = 'none';
        
        elemento_grafico = document.getElementById('graficoJustica');
        grafico = elemento_grafico.getContext('2d');
        elemento_grafico.style.cssText = "left: 7vw; bottom: auto";

        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        graficoExistente = new Chart(grafico, {
            type: 'doughnut',
            data: {
                labels: ['Bravura', 'Falta Bravura...'],
                datasets: [{
                    data: [ptsBravura, 10-ptsBravura],
                    backgroundColor: ['#ff8c00', '#333333'],
                    borderColor: '#000000',
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
        pctCompetencia.innerHTML = ptsJustica * 10;
        txtCompetencia.style.color = '#ffff00'
        graficoDeterminacao.style.display = 'none';
        graficoBravura.style.display = 'none';
        graficoJustica.style.display = 'block';
        graficoBondade.style.display = 'none';
        graficoPaciencia.style.display = 'none';
        graficoIntegridade.style.display = 'none';
        graficoPerseveranca.style.display = 'none';
        
        elemento_grafico = document.getElementById('graficoJustica');
        grafico = elemento_grafico.getContext('2d');
        elemento_grafico.style.cssText = "left: 7vw; bottom: auto";

        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        graficoExistente = new Chart(grafico, {
            type: 'doughnut',
            data: {
                labels: ['Justiça', 'Falta Justiça...'],
                datasets: [{
                    data: [ptsJustica, 10-ptsJustica],
                    backgroundColor: ['#ffff00', '#333333'],
                    borderColor: '#000000',
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
        pctCompetencia.innerHTML = ptsBondade * 10;
        txtCompetencia.style.color = '#00ff59'
        graficoDeterminacao.style.display = 'none';
        graficoBravura.style.display = 'none';
        graficoJustica.style.display = 'none';
        graficoBondade.style.display = 'block';
        graficoPaciencia.style.display = 'none';
        graficoIntegridade.style.display = 'none';
        graficoPerseveranca.style.display = 'none';
        
        elemento_grafico = document.getElementById('graficoJustica');
        grafico = elemento_grafico.getContext('2d');
        elemento_grafico.style.cssText = "left: 7vw; bottom: auto";

        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        graficoExistente = new Chart(grafico, {
            type: 'doughnut',
            data: {
                labels: ['Bondade', 'Falta Bondade...'],
                datasets: [{
                    data: [ptsBondade, 10-ptsBondade],
                    backgroundColor: ['#00ff59', '#333333'],
                    borderColor: '#000000',
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
        pctCompetencia.innerHTML = ptsPaciencia * 10;
        txtCompetencia.style.color = '#00fff7'
        graficoDeterminacao.style.display = 'none';
        graficoBravura.style.display = 'none';
        graficoJustica.style.display = 'none';
        graficoBondade.style.display = 'none';
        graficoPaciencia.style.display = 'block';
        graficoIntegridade.style.display = 'none';
        graficoPerseveranca.style.display = 'none';
        
        elemento_grafico = document.getElementById('graficoJustica');
        grafico = elemento_grafico.getContext('2d');
        elemento_grafico.style.cssText = "left: 7vw; bottom: auto";

        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        graficoExistente = new Chart(grafico, {
            type: 'doughnut',
            data: {
                labels: ['Paciência', 'Falta Paciência...'],
                datasets: [{
                    data: [ptsPaciencia, 10-ptsPaciencia],
                    backgroundColor: ['#00fff7', '#333333'],
                    borderColor: '#000000', 
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
        pctCompetencia.innerHTML = ptsIntegridade * 10;
        txtCompetencia.style.color = '#0008ff'
        graficoDeterminacao.style.display = 'none';
        graficoBravura.style.display = 'none';
        graficoJustica.style.display = 'none';
        graficoBondade.style.display = 'none';
        graficoPaciencia.style.display = 'none';
        graficoIntegridade.style.display = 'block';
        graficoPerseveranca.style.display = 'none';
        
        elemento_grafico = document.getElementById('graficoJustica');
        grafico = elemento_grafico.getContext('2d');
        elemento_grafico.style.cssText = "left: 7vw; bottom: auto";

        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        graficoExistente = new Chart(grafico, {
            type: 'doughnut',
            data: {
                labels: ['Integridade', 'Falta Integridade...'],
                datasets: [{
                    data: [ptsIntegridade, 10-ptsIntegridade],
                    backgroundColor: ['#0008ff', '#333333'],
                    borderColor: '#000000',
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
        pctCompetencia.innerHTML = ptsPerseveranca * 10;
        txtCompetencia.style.color = '#ff00ea'
        graficoDeterminacao.style.display = 'none';
        graficoBravura.style.display = 'none';
        graficoJustica.style.display = 'none';
        graficoBondade.style.display = 'none';
        graficoPaciencia.style.display = 'none';
        graficoIntegridade.style.display = 'none';
        graficoPerseveranca.style.display = 'block';
        
        elemento_grafico = document.getElementById('graficoJustica');
        grafico = elemento_grafico.getContext('2d');
        elemento_grafico.style.cssText = "left: 7vw; bottom: auto";

        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        graficoExistente = new Chart(grafico, {
            type: 'doughnut',
            data: {
                labels: ['Perseverança', 'Falta Perseverança...'],
                datasets: [{
                    data: [ptsPerseveranca, 10-ptsPerseveranca],
                    backgroundColor: ['#ff00ea', '#333333'],
                    borderColor: '#000000',
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
 } else if(modoGraficos = "Gráficos de linha com histórico de pontuações"){
    div_chart.style.cssText = `width: 50vw; height: 30vw;`;
    Chart.defaults.font.family = 'Determination Mono Web';
    Chart.defaults.font.size = 16;
    Chart.defaults.color = '#ffffff';
    Chart.defaults.elements.line.borderWidth = 5;
    if (competencia == 'determinacao') {
        console.log(historico_tentativas
        
        )
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
        elemento_grafico = document.getElementById('graficoDeterminacao');
        grafico = elemento_grafico.getContext('2d');
        elemento_grafico.style.cssText = "left: 0; bottom:0";

        if (graficoExistente) {
            graficoExistente.destroy()
        }  

        graficoExistente = new Chart(grafico, {
            type: 'line',
            data: {
                labels: historico_tentativas,
                datasets: [{
                label: 'Quantidade de pontos',
                backgroundColor: '#ff0000',
                data: historico_determinacao,
                fill: false,
                borderColor: '#ff0000',
                tension: 0.1,
                }]
            },
            options: {
                plugins: {
                    title: {
                    display: false,
                },
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Questionários realizados'
                    },
                    ticks: {
                        display: true
                    }
                },
                y: {
                    min: 0,
                    max: 10,
                    display: true,
                    title: {
                        display: true,
                        text: 'Quantidade de pontos'
                    },
                    ticks: {
                        display: true
                    }
                }
            }
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
        
        elemento_grafico = document.getElementById('graficoBravura');
        grafico = elemento_grafico.getContext('2d');
        elemento_grafico.style.cssText = "left: 0; bottom:0";

        if (graficoExistente) {
            graficoExistente.destroy()
        } 

        graficoExistente = new Chart(grafico, {
            type: 'line',
            data: {
                labels: historico_tentativas
            ,
                datasets: [{
                label: 'Quantidade de pontos',
                backgroundColor: '#ff8c00',
                data: historico_bravura,
                fill: false,
                borderColor: '#ff8c00',
                tension: 0.1
                }]
            },
            options: {
                plugins: {
                    title: {
                    display: false,
                },
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Questionários realizados'
                    },
                    ticks: {
                        display: true
                    }
                },
                y: {
                    min: 0,
                    max: 10,
                    display: true,
                    title: {
                        display: true,
                        text: 'Quantidade de pontos'
                    },
                    ticks: {
                        display: true
                    }
                }
            }
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

        elemento_grafico = document.getElementById('graficoJustica');
        grafico = elemento_grafico.getContext('2d');
        elemento_grafico.style.cssText = "left: 0; bottom:0";

        if (graficoExistente) {
            graficoExistente.destroy()
        } 

        graficoExistente = new Chart(grafico, {
            type: 'line',
            data: {
                labels: historico_tentativas
            ,
                datasets: [{
                label: 'Quantidade de pontos',
                backgroundColor: '#ffff00',
                data: historico_justica,
                fill: false,
                borderColor: '#ffff00',
                tension: 0.1
                }]
            },
            options: {
                plugins: {
                    title: {
                    display: false,
                },
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Questionários realizados'
                    },
                    ticks: {
                        display: true
                    }
                },
                y: {
                    min: 0,
                    max: 10,
                    display: true,
                    title: {
                        display: true,
                        text: 'Quantidade de pontos'
                    },
                    ticks: {
                        display: true
                    }
                }
            }
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
        
        elemento_grafico = document.getElementById('graficoBondade');
        grafico = elemento_grafico.getContext('2d');
        elemento_grafico.style.cssText = "left: 0; bottom:0";

        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        Chart.defaults.font.family = 'Determination Mono Web';  
        Chart.defaults.font.size = 16; 

        graficoExistente = new Chart(grafico, {
            type: 'line',
            data: {
                labels: historico_tentativas
            ,
                datasets: [{
                label: 'Quantidade de pontos',
                backgroundColor: '#00ff59',
                data: historico_bondade,
                fill: false,
                borderColor: '#00ff59',
                tension: 0.1
                }]
            },
            options: {
                plugins: {
                    title: {
                    display: false,
                },
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Questionários realizados'
                    },
                    ticks: {
                        display: true
                    }
                },
                y: {
                    min: 0,
                    max: 10,
                    display: true,
                    title: {
                        display: true,
                        text: 'Quantidade de pontos'
                    },
                    ticks: {
                        display: true
                    }
                }
            }
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
        
        elemento_grafico = document.getElementById('graficoPaciencia');
        grafico = elemento_grafico.getContext('2d');
        elemento_grafico.style.cssText = "left: 0; bottom:0";

        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        Chart.defaults.font.family = 'Determination Mono Web'; 
        Chart.defaults.font.size = 16; 

        graficoExistente = new Chart(grafico, {
            type: 'line',
            data: {
                labels: historico_tentativas
            ,
                datasets: [{
                label: 'Quantidade de pontos',
                backgroundColor: '#00fff7',
                data: historico_paciencia,
                fill: false,
                borderColor: '#00fff7',
                tension: 0.1
                }]
            },
            options: {
                plugins: {
                    title: {
                    display: false,
                },
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Questionários realizados'
                    },
                    ticks: {
                        display: true
                    }
                },
                y: {
                    min: 0,
                    max: 10,
                    display: true,
                    title: {
                        display: true,
                        text: 'Quantidade de pontos'
                    },
                    ticks: {
                        display: true
                    }
                }
            }
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
        
        elemento_grafico = document.getElementById('graficoIntegridade');
        grafico = elemento_grafico.getContext('2d');
        elemento_grafico.style.cssText = "left: 0; bottom:0";

        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        Chart.defaults.font.family = 'Determination Mono Web';
        Chart.defaults.font.size = 16;

        graficoExistente = new Chart(grafico, {
            type: 'line',
            data: {
                labels: historico_tentativas
            ,
                datasets: [{
                label: 'Quantidade de pontos',
                backgroundColor: '#0008ff',
                data: historico_integridade,
                fill: false,
                borderColor: '#0008ff',
                tension: 0.1
                }]
            },
            options: {
                plugins: {
                    title: {
                    display: false,
                },
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Questionários realizados'
                    },
                    ticks: {
                        display: true
                    }
                },
                y: {
                    min: 0,
                    max: 10,
                    display: true,
                    title: {
                        display: true,
                        text: 'Quantidade de pontos'
                    },
                    ticks: {
                        display: true
                    }
                }
            }
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
        
        elemento_grafico = document.getElementById('graficoPerseveranca');
        grafico = elemento_grafico.getContext('2d');
        elemento_grafico.style.cssText = "left: 0; bottom:0";

        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        Chart.defaults.font.family = 'Determination Mono Web'; 
        Chart.defaults.font.size = 16;  

        graficoExistente = new Chart(grafico, {
            type: 'line',
            data: {
                labels: historico_tentativas
            ,
                datasets: [{
                label: 'Quantidade de pontos',
                backgroundColor: '#ff00ea',
                data: historico_perseveranca,
                fill: false,
                borderColor: '#ff00ea',
                tension: 0.1
                }]
            },
            options: {
                plugins: {
                    title: {
                    display: false,
                },
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Questionários realizados'
                    },
                    ticks: {
                        display: true
                    }
                },
                y: {
                    min: 0,
                    max: 10,
                    display: true,
                    title: {
                        display: true,
                        text: 'Quantidade de pontos'
                    },
                    ticks: {
                        display: true
                    },
                }
            }
        }
    });
    }
 } 
}