/* Lógico_1: */

CREATE TABLE Personagem (
    ID_Personagem NUMERIC(15) PRIMARY KEY,
    fk_Tratamento_ID_Tratamento NUMERIC(15),
    fk_Relacao_ID_Relacao NUMERIC(15),
    Nome_Personagem CHAR(20),
    Idade NUMERIC(3),
    Etnia_Personagem CHAR(20),
    Personalidade CHAR(99),
    Profissao CHAR(99),
    Conflito CHAR(99),
    Genero CHAR(20)
);

CREATE TABLE Familia (
    ID_Familia NUMERIC(15) PRIMARY KEY,
    Nome_Familia CHAR(99),
    Descricao_Familia CHAR(99)
);

CREATE TABLE Tratamento (
    ID_Tratamento NUMERIC(15) PRIMARY KEY,
    Descricao CHAR(99),
    Nome_Tratamento CHAR(99)
);

CREATE TABLE Contexto_Sociocultutural (
    ID_Contexto_Sociocultural NUMERIC(15) PRIMARY KEY,
    fk_Familia_ID_Familia NUMERIC(15),
    fk_Personagem_ID_Personagem NUMERIC(15),
    Lugar CHAR(99),
    Classe_Social CHAR(99),
    Etnia_Contexto_Sociocultural CHAR(99),
    Cultura CHAR(99)
);

CREATE TABLE MembroFamilia_Tem (
    fk_Personagem_ID_Personagem NUMERIC(15),
    fk_Familia_ID_Familia NUMERIC(15),
    Parentesco CHAR(99),
    Funcao CHAR(99)
);

CREATE TABLE Relacao (
    ID_Relacao NUMERIC(15) PRIMARY KEY,
    Tipo_De_Relacao CHAR(99)
);
 
ALTER TABLE Personagem ADD CONSTRAINT FK_Personagem_2
    FOREIGN KEY (fk_Tratamento_ID_Tratamento)
    REFERENCES Tratamento (ID_Tratamento)
    ON DELETE RESTRICT;
 
ALTER TABLE Personagem ADD CONSTRAINT FK_Personagem_3
    FOREIGN KEY (fk_Relacao_ID_Relacao)
    REFERENCES Relacao (ID_Relacao)
    ON DELETE RESTRICT;
 
ALTER TABLE Contexto_Sociocultutural ADD CONSTRAINT FK_Contexto_Sociocultutural_2
    FOREIGN KEY (fk_Familia_ID_Familia)
    REFERENCES Familia (ID_Familia)
    ON DELETE RESTRICT;
 
ALTER TABLE Contexto_Sociocultutural ADD CONSTRAINT FK_Contexto_Sociocultutural_3
    FOREIGN KEY (fk_Personagem_ID_Personagem)
    REFERENCES Personagem (ID_Personagem)
    ON DELETE RESTRICT;
 
ALTER TABLE MembroFamilia_Tem ADD CONSTRAINT FK_MembroFamilia_Tem_1
    FOREIGN KEY (fk_Personagem_ID_Personagem)
    REFERENCES Personagem (ID_Personagem);
 
ALTER TABLE MembroFamilia_Tem ADD CONSTRAINT FK_MembroFamilia_Tem_2
    FOREIGN KEY (fk_Familia_ID_Familia)
    REFERENCES Familia (ID_Familia);