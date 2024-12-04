/* Exemplo */
select id_pedido, nome_usuario, nome_produto, pe.quantidade
from pedidos pe
inner join produtos
on pe.id_produto = produtos.id_produto
join usuario
on pe.id_usuario = usuario.id_usuario
where nome_produto = 'agua'

select * from usuario
select * from categoria
select * from produtos

/* Ex1 */
select id_pedido,us.id_usuario, nome_usuario, nome_produto, pe.quantidade
from pedidos pe
inner join produtos
on pe.id_produto = produtos.id_produto
join usuario us
on pe.id_usuario = us.id_usuario
where us.id_usuario = 2

/* Ex2 */
create table categoria (
id_categoria int primary key,
nome_categoria varchar(50) )

alter table produtos add id_categoria int references categoria(id_categoria)
/*foreign key (id_categoria) */
alter table categoria alter column nome_categoria type varchar(99)

insert into categoria (id_categoria,nome_categoria)
values (321,'liquido'), (432,'brinquedo')

update produtos set id_categoria = 432 where nome_produto = 'Bola'


select id_pedido, nome_produto, cat.nome_categoria
from pedidos pe
inner join produtos
on pe.id_produto = produtos.id_produto
join categoria cat
on produtos.id_categoria = cat.id_categoria
where cat.id_categoria = 321

/* Ex3 */
select id_pedido,us.id_usuario, nome_usuario, nome_produto, cat.nome_categoria
from pedidos pe
inner join produtos
on pe.id_produto = produtos.id_produto
join categoria cat
on produtos.id_categoria = cat.id_categoria
join usuario us
on pe.id_usuario = us.id_usuario
where cat.id_categoria = 321 and us.id_usuario = 2

/* Ex4 */
select id_pedido, nome_usuario, nome_produto, pe.quantidade
from pedidos pe
inner join produtos
on pe.id_produto = produtos.id_produto
join usuario
on pe.id_usuario = usuario.id_usuario
where usuario.id_usuario = 2
