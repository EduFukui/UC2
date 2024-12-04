insert into personagem (id_personagem,idade,nome_personagem,etnia_personagem)
values (8652315865467,24,'Chris','Moreno')

update personagem set profissao = 'fotografo', personalidade = 'desconfiado',
genero = 'masculino'
 where idade = 24
select * from personagem
select * from familia
select * from relacao
select * from tratamento
select * from membrofamilia_tem
select * from contexto_sociocultutural

insert into contexto_sociocultutural (id_contexto_sociocultural,fk_familia_id_familia,fk_personagem_id_personagem,lugar, classe_social) values (4545,2134,8652315865467,'orlando','ricos')

insert into membrofamilia_tem (parentesco,funcao) values ('filha','cacadora')

insert into tratamento (id_tratamento,descricao) values (1234,'abusivo')

insert into familia (id_familia,descricao_familia) values (2134,'manipuladora')

insert into relacao (id_relacao,tipo_de_relacao) values (314,'amor')