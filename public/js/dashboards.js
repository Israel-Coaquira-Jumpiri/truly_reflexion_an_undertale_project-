var grafico = "";
var graficoExistente;
var modo_menu = "fechado"
var modoGraficos = "Gráficos de rosca com resultados atuais"

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
    var historico_determinacao = [];
    var historico_bravura = [];
    var historico_justica = [];
    var historico_bondade = [];
    var historico_paciencia = [];
    var historico_integridade = [];
    var historico_perseveranca = [];
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
                // for (let cont = 0; cont < array.length; cont++) {
                //     const element = array[cont];
                    
                // }
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
    if (modoGraficos == "Gráficos de rosca com resultados atuais") {
    spnLegenda.style.display = 'block'
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
        grafico = document.getElementById('graficoDeterminacao').getContext('2d');
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
        grafico = document.getElementById('graficoBravura').getContext('2d');
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
        grafico = document.getElementById('graficoJustica').getContext('2d');
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
        grafico = document.getElementById('graficoBondade').getContext('2d');
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
        grafico = document.getElementById('graficoPaciencia').getContext('2d');
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
        grafico = document.getElementById('graficoIntegridade').getContext('2d');
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
        grafico = document.getElementById('graficoPerseveranca').getContext('2d');
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
    div_chart.style.cssText = ``;
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
        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        graficoExistente = new Chart(grafico, {
            type: 'line',
            data: {
                labels: ["teste1", "teste2", "teste3", "teste4", "teste5", "teste6", "teste7"],
                datasets: [{
                label: 'My First Dataset',
                backgroundColor: 'aqua',
                data: [0, 1, 2, 5, 8, 9, 10],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                }, 
            },
            scales: {
                x: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Month'
                  }
                },
                y: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Value'
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
        grafico = document.getElementById('graficoBravura').getContext('2d');
        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        graficoExistente = new Chart(grafico, {
            type: 'line',
            data: {
                labels: ["teste1", "teste2", "teste3", "teste4", "teste5", "teste6", "teste7"],
                datasets: [{
                label: 'My First Dataset',
                backgroundColor: 'aqua',
                data: [0, 1, 2, 5, 8, 9, 10],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
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
            },
            scales: {
                x: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Month'
                  }
                },
                y: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Value'
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
        grafico = document.getElementById('graficoJustica').getContext('2d');
        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        graficoExistente = new Chart(grafico, {
            type: 'line',
            data: {
                labels: ["teste1", "teste2", "teste3", "teste4", "teste5", "teste6", "teste7"],
                datasets: [{
                label: 'My First Dataset',
                backgroundColor: 'aqua',
                data: [0, 1, 2, 5, 8, 9, 10],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
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
            },
            scales: {
                x: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Month'
                  }
                },
                y: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Value'
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
        grafico = document.getElementById('graficoBondade').getContext('2d');
        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        graficoExistente = new Chart(grafico, {
            type: 'line',
            data: {
                labels: ["teste1", "teste2", "teste3", "teste4", "teste5", "teste6", "teste7"],
                datasets: [{
                label: 'My First Dataset',
                backgroundColor: 'aqua',
                data: [0, 1, 2, 5, 8, 9, 10],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
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
            },
            scales: {
                x: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Month'
                  }
                },
                y: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Value'
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
        grafico = document.getElementById('graficoPaciencia').getContext('2d');
        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        graficoExistente = new Chart(grafico, {
            type: 'line',
            data: {
                labels: ["teste1", "teste2", "teste3", "teste4", "teste5", "teste6", "teste7"],
                datasets: [{
                label: 'My First Dataset',
                backgroundColor: 'aqua',
                data: [0, 1, 2, 5, 8, 9, 10],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
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
            },
            scales: {
                x: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Month'
                  }
                },
                y: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Value'
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
        grafico = document.getElementById('graficoIntegridade').getContext('2d');
        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        graficoExistente = new Chart(grafico, {
            type: 'line',
            data: {
                labels: ["teste1", "teste2", "teste3", "teste4", "teste5", "teste6", "teste7"],
                datasets: [{
                label: 'My First Dataset',
                backgroundColor: 'aqua',
                data: [0, 1, 2, 5, 8, 9, 10],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
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
            },
            scales: {
                x: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Month'
                  }
                },
                y: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Value'
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
        grafico = document.getElementById('graficoPerseveranca').getContext('2d');
        if (graficoExistente) {
            graficoExistente.destroy()
        } 
        graficoExistente = new Chart(grafico, {
            type: 'line',
            data: {
                labels: ["teste1", "teste2", "teste3", "teste4", "teste5", "teste6", "teste7"],
                datasets: [{
                label: 'My First Dataset',
                backgroundColor: 'aqua',
                data: [0, 1, 2, 5, 8, 9, 10],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
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
            },
            scales: {
                x: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Month'
                  }
                },
                y: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Value'
                  }
                }
            }
        });
    }
 } 
}