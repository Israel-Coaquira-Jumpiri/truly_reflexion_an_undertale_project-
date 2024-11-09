CREATE DATABASE undereflexion;

USE undereflexion;

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(60),
    senha VARCHAR(45)
);

select * from Usuario;