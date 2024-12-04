/* aula 15 */
select * from pedidos
select * from usuario
select * from produtos

alter table usuario add column genero Char(99)
alter table usuario add column salario numeric(99)
alter table usuario add column CPF varchar(99)

insert into usuario (id_usuario,nome_usuario,endereco,senha,email,idade,genero,salario)
values (4,'Joao','av.brasil',1234,'jooj@gmail.com',23,'caneta',2,975), (5,'Fred','rua osvaldo',4321,'fredao@gmail.coab',10,'masculino', 10,000,000), 
(6,'Sheila','av. jogo',456,'seila@oi.com',25,'mulher',1,000,000)

update usuario set salario = 150 where id_usuario = 1

update usuario set genero = 'masculino' where id_usuario = 4

/* 1 */select * from usuario
/* 2 */select distinct nome_usuario from usuario
/* 3 */select nome_usuario, CPF from usuario
/* 4 */select nome_usuario, CPF from usuario where genero = 'feminino'
/* 5 */select nome_usuario , CPF from usuario where genero = 'feminino' order by nome_usuario desc

/* 6 */select nome_usuario , salario from usuario where genero ='masculino'and salario < 3000
ALTER TABLE usuario ALTER COLUMN salario TYPE numeric
alter table usuario drop column salario

/*  aula 16  */
select count (*) as quantidade  from usuario
select count (*) as mulheres from usuario where genero = 'feminino'

select count (*) as quantidade_de_produtos from produtos
select count (*) as quantidade_de_pedidos from pedidos where id_usuario = 2
select count (*) as quantidade_de_pedidos from pedidos where id_produto = 12
select count (distinct id_usuario) as pedidos_feitos from pedidos

select avg (salario::numeric) as MediaSalarial from usuario

select avg (preco::numeric) as MediaPreco From produtos
select avg (quantidade::numeric) as MediaProdutos from pedidos
select avg (num_pedidos) from (select id_usuario, count (id_pedido) as num_pedidos from pedidos group by id_usuario) as MediaPedidosUser
select avg (salario::numeric) as MediaSalarial from usuario

select sum (salario) from usuario
select sum (preco/3) from produtos

select avg (salario::numeric) as MediaSalarial from usuario where genero = 'masculino'
select avg (salario::numeric) as MediaSalarial from usuario where genero = 'feminino'
select (select count (*) as usuario_feminino from usuario where genero = 'feminino'),(select count (*) as Usuario_Masculinos from usuario where genero = 'masculino') 
select sum (case when genero = 'masculino' then 1 else 0 end) as usuario_masculino, sum (case when genero ='feminino'then 1 else 0 end) as usuario_feminino from usuario

select sum (preco)