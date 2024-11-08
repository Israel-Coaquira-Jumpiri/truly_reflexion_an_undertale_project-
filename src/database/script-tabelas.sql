-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE undereflexion;

USE undereflexion;

CREATE TABLE Usuario(
	idUsuario INT,
    nome VARCHAR(45),
    email VARCHAR(60),
    senha VARCHAR(45)
);
select * from Usuario;