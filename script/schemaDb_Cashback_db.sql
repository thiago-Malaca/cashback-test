--
-- Database: cashback_db
--

CREATE DATABASE cashback_db;

-- ENTITIES

--
-- Schema entity industria
--

CREATE TABLE IF NOT EXISTS "industria" (
	cnpj varchar(130)  NOT NULL,
	codigoInterno varchar(130)  NOT NULL,
	nomeFantasia varchar(130)  NOT NULL,
	senhaBIopcional varchar(130) ,
	urlFotoIndustriaopcional varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity produto
--

CREATE TABLE IF NOT EXISTS "produto" (
	nome varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	mail varchar(130) ,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	roles varchar(130) ,
	surname varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);




-- relation 1:m Industria Produto - Industria
ALTER TABLE produto ADD COLUMN Industria INTEGER  REFERENCES "industria"(_id);
