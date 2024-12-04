select * from usuario
select * from pedidos

alter table usuario drop column email

alter table usuario add email int

alter table usuario alter column email type varchar(255)

alter table pedidos drop qtde

create table categoria(
id_categoria int
)
drop table categoria

TRUNCATE TABLE usuario cascade
TRUNCATE TABLE pedidos

alter table usuario alter column email rename to

alter table usuario add idade int
alter table pedidos add quantidade int
alter table pedidos rename column preco to money

TRUNCATE TABLE produtos cascade
TRUNCATE TABLE pedidos cascade



insert into usuario (id_usuario,nome_usuario)
values (1,'Joao',), (2,'Marcela'), (3,'Isadora')

update usuario set idade = 25 where id_usuario = 3

select * from produtos

insert into produtos (id_produto,nome_produto,preco,qtde_estoque,descricao)
values (12,'Bola',30,21,'bola redonda'), (13,'agua',20,100,'agua benta')

select * from pedidos

insert into pedidos (id_pedido,id_usuario,id_produto,money,quantidade)
values (123,1,12,60,2), (124,2,13,20,1), (125,3,12,30,1), (126,2,12,30,1), (127,1,13,60,3)

update produtos set qtde_estoque = 17 where nome_produto = 'Bola'
update produtos set qtde_estoque = 96 where nome_produto = 'agua'

delete from pedidos where id_pedido = 123
delete from pedidos where id_pedido = 125

select *from produtos where preco > 50 order by nome_produto , preco asc

select *from usuario where idade >17