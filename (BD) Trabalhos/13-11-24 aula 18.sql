/*  13/11/24 aula 18      */

/* Exemplo */

select nome_usuario, quantidade 
from usuario, pedidos 
where pedidos.id_usuario = usuario.id_usuario and quantidade > 2

select * from usuario
select * from pedidos

/* Ex1 */
select nome_usuario, id_pedido
from usuario, pedidos
where pedidos.id_usuario = usuario.id_usuario

/* Ex2 */
select nome_produto, quantidade
from produtos, pedidos
where pedidos.id_produto = produtos.id_produto

/* Ex3 */
select nome_usuario, id_pedido, quantidade 
from usuario, pedidos
where pedidos.id_usuario = usuario.id_usuario and quantidade > 2

/* Ex4 */
select nome_usuario, quantidade , nome_produto, sum (quantidade*preco) as valor
from usuario, pedidos, produtos
where pedidos.id_usuario = usuario.id_usuario and pedidos.id_produto = produtos.id_produto
group by nome_usuario, quantidade , nome_produto


