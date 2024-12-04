/* Aula 20 21/11/24 */

select * from categoria
select * from produtos
select * from pedidos

/* Exemplo left join */
select nome_produto, nome_categoria
from produtos
left join categoria
on produtos.id_categoria = categoria.id_categoria

insert into categoria (id_categoria, nome_categoria)
values (23, 'comida')

insert into produtos (id_produto,nome_produto,qtde_estoque,preco,descricao)
values (14,'feijao',43,10,'comida boa')



/* Exemplo right join */
select nome_produto, nome_categoria
from produtos
right join categoria
on produtos.id_categoria = categoria.id_categoria

select nome_usuario, id_pedido
from usuario
right join pedidos
on usuario.id_usuario = pedidos.id_usuario

/* Exemplo cross join */

select nome_usuario, nome_produto
from produtos
cross join usuario

/* Exemplo full outer join */

select nome_produto, nome_categoria
from produtos
full outer join categoria
on produtos.id_categoria = categoria.id_categoria

/* Ex1 */
select  nome_categoria, nome_produto
from categoria
left join produtos
on produtos.id_categoria = categoria.id_categoria

/*update produtos set id_categoria = null where id_produto = 14*/

/* Ex2 */
select nome_usuario, id_pedido
from usuario
right join pedidos
on usuario.id_usuario = pedidos.id_usuario

/* Ex3 */
select nome_categoria, nome_produto
from produtos
cross join categoria
where nome_categoria = 'brinquedo'

/* Ex4 */
select id_pedido, nome_categoria, nome_produto
from pedidos
full outer join produtos
on produtos.id_produto = pedidos.id_produto
full outer join categoria
on produtos.id_categoria = categoria.id_categoria