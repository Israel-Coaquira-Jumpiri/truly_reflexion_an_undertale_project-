var database = require("../database/config")

function listarPorID(idDoUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idDoUsuario)
    var instrucaoSql = `
        SELECT p.determinacao, p.bravura, p.justica, p.bondade, p.paciencia, p.integridade, p.perseveranca FROM Usuario AS u 
        JOIN Pontuacao AS p ON p.fkUsuario = u.idUsuario WHERE u.idUsuario = ${idDoUsuario} ORDER BY idPontuacao DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql); 
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(determinacao, bravura, justica, bondade, paciencia, integridade, perseveranca, fkUsuario) { 
    var instrucaoSql = `
        INSERT INTO Pontuacao VALUES 
        (DEFAULT, ${determinacao}, ${bravura}, ${justica}, ${bondade}, ${paciencia}, ${integridade}, ${perseveranca}, ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarPorID,
    cadastrar
}; 