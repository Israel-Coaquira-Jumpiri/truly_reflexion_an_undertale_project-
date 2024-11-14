CREATE DATABASE undereflexion;

USE undereflexion;

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(60),
    senha VARCHAR(45)
);

CREATE TABLE pergunta (
	idPergunta INT PRIMARY KEY AUTO_INCREMENT,
    enunciado VARCHAR(45)
);

CREATE TABLE alternativa (
	fkPergunta INT,
	idAlternativa INT AUTO_INCREMENT,
    CONSTRAINT pkComposta PRIMARY KEY (fkPergunta, idAlternativa),
    enunciado VARCHAR(45),
    determinacao INT,
    bravura INT,
    justica INT,
    bondade INT,
    paciencia INT,
    integridade INT,
    perseveranca INT,
    CONSTRAINT fkPerguntaAlternativa FOREIGN KEY (fkPergunta) REFERENCES pergunta(idPergunta)
);

CREATE TABLE escolha (
	fkUsuario INT,
    fkAlternativa INT,
    CONSTRAINT pkComposta PRIMARY KEY (fkUsuario, fkAlternativa),
    horaQuest DATETIME DEFAULT current_timestamp(),
    CONSTRAINT fkUsuarioEscolha FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    CONSTRAINT fkAlternativaEscolhida FOREIGN KEY (fkAlternativa) REFERENCES alternativa(idAlternativa)
);

SELECT * FROM usuario;

SHOW TABLES;

INSERT INTO pergunta VALUES 
(DEFAULT, 'Durante uma apresentação em grupo, um dos colegas comete um erro que pode prejudicar a nota de todos. Qual é a sua reação?'),
(DEFAULT, 'Na reta final do semestre, você percebe que está atrasado em algumas matérias. Como lida com a situação?');

INSERT INTO alternativa VALUES 
(DEFAULT, 'A) Com calma, você ajuda a corrigir o erro na apresentação, se possível, ou minimiza as consequências sem expor o colega.', 1),
(DEFAULT, 'B) Você tenta contornar a situação, mas não interfere muito para não se comprometer.', 1),
(DEFAULT, 'C) Você corrige o erro, mas faz questão de mencionar que o problema não foi causado por você.', 1),
(DEFAULT, 'D) Não tenta corrigir o erro, preferindo seguir a apresentação.', 1),
(DEFAULT, 'A) Organiza um cronograma de estudos intensivo para recuperar o tempo.', 2),
(DEFAULT, 'B) Concentra-se nas matérias mais importantes e deixa as outras para depois.', 2),
(DEFAULT, 'C) Pede ajuda ao professor para entender o conteúdo. ', 2),
(DEFAULT, 'D) Decide relaxar e deixar para o próximo semestre o que não der tempo.', 2);

INSERT INTO pontuacao VALUES 
(DEFAULT, 0, 0, 0, 0, 0, 0, 0, 1),
(DEFAULT, 0, 0, 0, 0, 0, 0, 0, 2),
(DEFAULT, 0, 0, 0, 0, 0, 0, 0, 3),
(DEFAULT, 0, 0, 0, 0, 0, 0, 0, 4),
(DEFAULT, 0, 0, 0, 0, 0, 0, 0, 5),
(DEFAULT, 0, 0, 0, 0, 0, 0, 0, 6),
(DEFAULT, 0, 0, 0, 0, 0, 0, 0, 7),
(DEFAULT, 0, 0, 0, 0, 0, 0, 0, 8);