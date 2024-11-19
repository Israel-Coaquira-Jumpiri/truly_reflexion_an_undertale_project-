var express = require("express");
var router = express.Router();

var pontuacaoControler = require("../controllers/pontuacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarPontuacao", function (req, res) {
    pontuacaoControler.cadastrar(req, res);
})

router.get("/listarPontuacao/:idUsuarioServer", function (req, res) {
    pontuacaoControler.listarPorID(req, res);
});

module.exports = router; 