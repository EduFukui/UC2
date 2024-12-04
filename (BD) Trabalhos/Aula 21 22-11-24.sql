/* Aula 21 22/11/24 */

select * from categoria
select * from produtos
select * from pedidos

/* Exemplo view */

create or replace view produtos_comprador as
select pe.id_pedido as numero_pedido, nome_usuario, nome_produto, pe.quantidade, pe.quantidade*preco as fatura
from pedidos pe
inner join produtos
on pe.id_produto = produtos.id_produto
inner join usuario
on pe.id_usuario = usuario.id_usuario

select * from produtos_comprador

/* Ex1 */
create or replace view produtos_categorias as
select nome_produto, nome_categoria
from produtos
left join categoria
on produtos.id_categoria = categoria.id_categoria

select * from produtos_categorias


/* Ex2 */
create or replace view pedidos_feitos as
select nome_usuario, id_pedido
from usuario
right join pedidos
on usuario.id_usuario = pedidos.id_usuario

select * from pedidos_feitos


/* Ex3 */
create or replace view produtos_comprador as
select pe.id_pedido as numero_pedido, nome_usuario, nome_produto, pe.quantidade, pe.quantidade*preco as fatura
from pedidos pe
inner join produtos
on pe.id_produto = produtos.id_produto
full outer join usuario
on pe.id_usuario = usuario.id_usuario

select * from produtos_comprador


/* Indices */

/* Exemplo */
create index on usuario(id_usuario)
create index on produtos using hash (id_produto)
create index on pedidos(id_pedido)




