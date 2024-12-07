CREATE DATABASE undereflexion;

USE undereflexion;



CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(60),
    senha VARCHAR(45),
    acessoJulgamento TINYINT
);
CREATE TABLE Pontuacao (
	idPontuacao INT PRIMARY KEY AUTO_INCREMENT,
    determinacao INT,
    bravura INT,
    justica INT,
    bondade INT,
    paciencia INT,
    integridade INT,
    perseveranca INT,
    fkUsuario INT,
    CONSTRAINT fkUserPts FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

SELECT * FROM Usuario;
SELECT * FROM Pontuacao;

DELETE FROM Usuario WHERE idUsuario = 12;
INSERT INTO Pontuacao VALUES 
(DEFAULT, 3, 5, 5, 5, 4, 5, 5, 10);

TRUNCATE TABLE Pontuacao;
DROP TABLE Pontuacao;
TRUNCATE TABLE Usuario;
ALTER TABLE Usuario ADD COLUMN acessoJulgamento TINYINT;
	
    DELETE FROM usuario WHERE idUsuario = 9;
    
UPDATE Usuario SET acessoJulgamento = 1 WHERE idusuario = 1;

SELECT * FROM Pontuacao AS p LEFT JOIN Usuario AS u ON p.fkUsuario = u.idUsuario WHERE idUsuario = 1;
SELECT p.determinacao, p.bravura, p.justica, p.bondade, p.paciencia, p.integridade, p.perseveranca FROM Usuario AS u JOIN Pontuacao AS p ON p.fkUsuario = u.idUsuario WHERE u.idUsuario = 10 ORDER BY idPontuacao DESC LIMIT 1;
SELECT p.determinacao, p.bravura, p.justica, p.bondade, p.paciencia, p.integridade, p.perseveranca FROM Usuario AS u JOIN Pontuacao AS p ON p.fkUsuario = u.idUsuario WHERE u.idUsuario = 10 ORDER BY idPontuacao;

