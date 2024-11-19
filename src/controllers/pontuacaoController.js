var pontuacaoModel = require("../models/pontuacaoModel");

function listarPorID(req, res) {
    var idDoUsuario = req.params.idUsuarioServer;
    
    if (idDoUsuario == undefined) {
        res.status(400).send("Seu ID de usuário está undefined!");
    } else {

        pontuacaoModel.listarPorID(idDoUsuario)
            .then(
                function (resultadolistarPorID) {
                    console.log(`\nResultados encontrados: ${resultadolistarPorID.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadolistarPorID)}`);
                    res.status(200).json(resultadolistarPorID) // transforma JSON em String
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var determinacao = req.body.determinacaoServer;
    var bravura = req.body.bravuraServer;
    var justica = req.body.justicaServer;
    var bondade = req.body.bondadeServer;
    var paciencia = req.body.pacienciaServer;
    var integridade = req.body.integridadeServer;
    var perseveranca = req.body.perseverancaServer;
    var fkUsuario = req.body.fkUsuarioServer;
        // Passe os valores como parâmetro e vá para o arquivo pontuacaoModel.js
        pontuacaoModel.cadastrar(determinacao, bravura, justica, bondade, paciencia, integridade, perseveranca, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) { 
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    listarPorID,
    cadastrar
}